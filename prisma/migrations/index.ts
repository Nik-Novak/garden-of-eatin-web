const migrationName = process.argv[2];
// Grab all arguments from index 3 to the end
const migrationArgs = process.argv.slice(3);

if (!migrationName) {
  console.error("❌ Please provide a migration name");
  console.error("Example: yarn migrate preload [arg1] [arg2]");
  process.exit(1);
}

(async () => {
  try {
    console.log(`🔄 Attempting to run migration "${migrationName}" with args`, ...migrationArgs);
    const migration = await import(`./${migrationName}`);
    
    if (typeof migration.default === "function") {
      // Spread the remaining arguments into the function call
      await migration.default(...migrationArgs);
      console.log(`✅ Successful migration "${migrationName}"`);
    } else {
      throw new Error("Migration must export a default function");
    }
  } catch (err) {
    console.error(`❌ Failed to run migration "${migrationName}"`);
    console.error(err);
    process.exit(1);
  }
})();