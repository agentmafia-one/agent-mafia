#!/bin/bash
# WatchBot Cron Runner
# Run every 30 minutes via cron:
# */30 * * * * /home/ifc/clawd/projects/agent-mafia/watchbot/src/cron_runner.sh >> /home/ifc/clawd/projects/agent-mafia/watchbot/data/cron.log 2>&1

cd /home/ifc/clawd/projects/agent-mafia/watchbot
echo "$(date -u +"%Y-%m-%d %H:%M:%S UTC") - Starting WatchBot"
python3 src/monitor.py 2>&1 | grep -v DeprecationWarning
echo "$(date -u +"%Y-%m-%d %H:%M:%S UTC") - Done"
echo "---"
