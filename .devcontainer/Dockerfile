# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.205.2/containers/typescript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 16, 14, 12, 16-bullseye, 14-bullseye, 12-bullseye, 16-buster, 14-buster, 12-buster
ARG VARIANT="16-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
  && apt-get -y install --no-install-recommends fish zsh\
  # playwright dependensies:
  libnss3-dev libatk1.0-0 \
  libatk-bridge2.0-0 libcups2 libgbm1 libcairo2 libasound2 libnspr4 libdbus-1-3 \
  libxcb1 libx11-6 libxcomposite1 libxdamage1 libxext6 libxfixes3 libxrandr2 \
  libpango-1.0-0 libxkbcommon0 

# Starship Prompt
RUN curl -s https://api.github.com/repos/starship/starship/releases/latest \
  | grep browser_download_url \
  | grep x86_64-unknown-linux-gnu \
  | cut -d '"' -f 4 \
  | wget -qi - 
RUN tar xvf starship-*.tar.gz 
RUN ls -la
RUN sudo mv starship /usr/local/bin/

RUN echo 'eval "$(starship init bash)"' >> /home/node/.bashrc 
RUN echo 'eval "$(starship init zsh)"' >> /home/node/.zshrc 

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node packages
RUN su node -c "npm i -g npm-check-updates snyk"

RUN npm install -g npm