#!/bin/bash
PROJECT_NAME="backend"
HOST="melody-vds"
TARGET_DIR="/root/backend"

echo "Uploading"
rsync --files-from=rsync-files -r --delete . $HOST:$TARGET_DIR || exit 2

echo "DONE"