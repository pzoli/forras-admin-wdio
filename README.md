# forras-admin-wdio

This project is for automated test purpose. You can test Forras-admin with this code.

## install

npm install

## Run

copy example.env to .env and setup username and password
```bash
mkdir -p ~/tmp/forras-admin-wdio
export TMPDIR="$HOME/tmp/forras-admin-wdio"
npx wdio run ./wdio.conf.ts 
```