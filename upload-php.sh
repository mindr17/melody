#!/bin/bash
PROJECT_NAME="melody.na4u.ru"
HOST="melody-php"
TARGET_DIR="/home/c50292/$PROJECT_NAME/www"

echo "Uploading"
rsync --files-from=rsync-files -r --delete . $HOST:$TARGET_DIR || exit 2

echo "DONE"