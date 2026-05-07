/// <reference types="@types/google.maps" />
"use client";

import { useEffect, useState } from "react";
import { APIProvider, Map, useMap, useMapsLibrary } from "@vis.gl/react-google-maps";

interface HeatmapProps {
  points: { lat: number; lng: number }[];
}

/**
 * Automatically adjusts the map viewport to fit all provided points.
 */
function BoundsHandler({ points }: { points: { lat: number; lng: number }[] }) {
  const map = useMap();

  useEffect(() => {
    if (!map || points.length === 0) return;

    const bounds = new google.maps.LatLngBounds();
    points.forEach((point) => bounds.extend(point));

    // padding ensures markers aren't right against the edge of the frame
    map.fitBounds(bounds, {
      top: 50,
      right: 50,
      bottom: 50,
      left: 50,
    });
  }, [map, points]);

  return null;
}

function HeatmapLayer({ points }: HeatmapProps) {
  const map = useMap();
  const visualization = useMapsLibrary("visualization");
  const [heatmap, setHeatmap] = useState<google.maps.visualization.HeatmapLayer | null>(null);

  useEffect(() => {
    if (!visualization || !map) return;
    
    const layer = new google.maps.visualization.HeatmapLayer({
      map,
      radius: 30,
      opacity: 0.8,
    });
    
    setHeatmap(layer);

    // Cleanup layer on unmount
    return () => layer.setMap(null);
  }, [visualization, map]);

  useEffect(() => {
    if (!heatmap || !visualization) return;

    const heatmapData = points.map((p) => new google.maps.LatLng(p.lat, p.lng));
    heatmap.setData(heatmapData);
  }, [heatmap, points, visualization]);

  return null;
}

export default function Heatmap({ points }: HeatmapProps) {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <Map
        defaultCenter={{ lat: 0, lng: 0 }}
        defaultZoom={2}
        mapId="DEMO_MAP_ID"
        gestureHandling="greedy"
        disableDefaultUI={true} // Enabled UI to allow manual zoom/comparison
        style={{ width: "100%", height: "100%", borderRadius: "16px" }}
      >
        <HeatmapLayer points={points} />
        <BoundsHandler points={points} />
      </Map>
    </APIProvider>
  );
}