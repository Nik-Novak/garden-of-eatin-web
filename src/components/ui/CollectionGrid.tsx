"use client";
import React from 'react';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridValidRowModel,
  GridRenderCellParams,
  DataGridProps,
} from '@mui/x-data-grid';
import { Button } from '@mui/material';

// --- 1. Type Definitions ---

// Utility to check if a type is a primitive
type IsPrimitive<T> = T extends string | number | boolean | Date | null | undefined ? true : false;

// Recursive Include type
export type IncludeShape<T, R extends GridValidRowModel> = {
  [K in keyof T]?: IsPrimitive<T[K]> extends true
    ? boolean | Partial<GridColDef<R>>
    : T[K] extends any[] // Arrays
    ? boolean | Partial<GridColDef<R>>
    : boolean | Partial<GridColDef<R>> | IncludeShape<T[K], R>; // Nested Objects
};

export type CollectionGridProps<R extends GridValidRowModel> = Omit<DataGridProps<R>, 'rows'|'columns'> & {
  rows: GridRowsProp<R>;
  include: IncludeShape<R, R>;
};

// --- 2. Helper Functions ---

// Safely fetches nested data using a dot-notation string path (e.g., "settings.dark_mode")
const getNestedValue = (obj: any, path: string) => {
  return path
    .split('.')
    .reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
};

// --- 3. The Component ---

export default function CollectionGrid<R extends GridValidRowModel>({
  rows,
  include,
  ...DataGridProps
}: CollectionGridProps<R>) {
  
  // Generic handler for the View button
  const handleView = (params: GridRenderCellParams<any, any>) => {
    console.log('Viewing details for:', params.field, params.row);
    // You could trigger a sleek modal or slide-over drawer here
  };

  // Recursive function to parse the include object into GridColDef[]
  const buildColumns = (includeObj: any, path: string = ''): GridColDef<R>[] => {
    let cols: GridColDef<R>[] = [];

    // Known MUI GridColDef keys to distinguish between a ColDef override and a nested object schema
    const colDefKeys = new Set([
      'field', 'headerName', 'width', 'minWidth', 'maxWidth', 'flex',
      'valueGetter', 'valueFormatter', 'renderCell', 'renderHeader',
      'sortable', 'filterable', 'type', 'align', 'headerAlign', 'editable',
    ]);

    for (const key in includeObj) {
      const val = includeObj[key];
      
      // Skip if explicitly false or omitted
      if (val === false || val === undefined || val === null) {
        continue;
      }

      const currentPath = path ? `${path}.${key}` : key;
      
      // Compute a clean default header name (e.g., 'first_name' -> 'First Name')
      const defaultHeaderName = key
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (l) => l.toUpperCase());

      // Create base computed defaults
      const defaultCol: GridColDef<R> = {
        field: currentPath,
        headerName: defaultHeaderName,
        width: 150,
        valueGetter: (value: any, row: R) => {
          // Resolve dot notation for nested objects (e.g., settings.dark_mode)
          if (currentPath.includes('.')) {
            return getNestedValue(row, currentPath);
          }
          // Fallback to normal retrieval
          return row[currentPath] !== undefined ? row[currentPath] : value;
        },
        renderCell: (params: GridRenderCellParams<any, any>) => {
          const cellValue = params.value;
          
          // Automatically render a View button for complex data types (objects/arrays)
          if(cellValue instanceof Date){
            return cellValue.toLocaleString()
          }
          if (typeof cellValue === 'object' && cellValue !== null) {
            return (
              <Button
                variant="contained"
                size="small"
                onClick={() => handleView(params)}
                sx={{ textTransform: 'none', borderRadius: 2 }}
              >
                View
              </Button>
            );
          }
          
          // Render primitive values normally
          return cellValue as React.ReactNode;
        },
      };

      if (val === true) {
        // Simple boolean flag -> use computed defaults
        cols.push(defaultCol);
      } else if (typeof val === 'object') {
        // Heuristic: Does this object contain DataGrid column properties?
        const isColDef = Object.keys(val).some((k) => colDefKeys.has(k));

        if (isColDef) {
          // It's a GridColDef override -> merge user definition with computed defaults
          cols.push({
            ...defaultCol,
            field: val.field || defaultCol.field, 
            ...val,
          });
        } else {
          // It's a nested schema object -> recurse deeper
          cols = cols.concat(buildColumns(val, currentPath));
        }
      }
    }

    return cols;
  };

  const columns = buildColumns(include);

  return (
    <DataGrid 
      autosizeOnMount
      autosizeOptions={{
        includeHeaders: false,
        includeOutliers: false,
        expand: true, // If true, columns will expand to fill remaining space
      }}
      {...DataGridProps} 
      rows={rows} 
      columns={columns} 
    />
  );
}