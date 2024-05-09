# EcoTrace

https://internetcomputer.org/docs/current/developer-docs/getting-started/install/
wsl
https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl
https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-git

sudo apt update
sudo apt upgrade
sudo apt-get install curl
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
dfx --version
dfxvm --version
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
command -v nvm
nvm install --lts
nvm install node
nvm ls
node --version
npm  --version
sudo apt-get install git
git --version

pwd
mkdir 'name'
cd 'name'
which dfx
sudo rm

dfx new
dfx start --background --clean
--dfx canister create starter_kit_backend
dfx build
dfx deploy
dfx canister install --all --mode upgrade

code .

git clone <url_del_repositorio>
cd <nombre_del_repositorio>
git add .
git commit -m "Mensaje del commit actualizado"
git push origin <nombre_de_la_rama>


Documentacion
https://internetcomputer.org/docs/current/motoko/main/motoko
