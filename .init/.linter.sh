#!/bin/bash
cd /home/kavia/workspace/code-generation/library-explorer-283657-283666/library_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

