const migrationName = process.argv[2];

if (!migrationName) {
  console.error("❌ Please provide a migration name");
  console.error("Example: yarn migrate preload");
  process.exit(1);
}

(async () => {
  try {
    console.log(`🔄 Attempting to run migration "${migrationName}"`);
    const migration = await import(`./${migrationName}`);
    if (typeof migration.default === "function") {
      await migration.default();
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
