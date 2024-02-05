const container = document.getElementById('kimetsu_container');
document.getElementById("loading").style.display ="none";

// 全キャラクター
async function allApi() {
  const res = await fetch("https://ihatov08.github.io/kimetsu_api/api/all.json");
  const characters = await res.json();

  for(let i = 0; i < characters.length; i++) {
    container.innerHTML += `
      <link rel="stylesheet" href="styles.css">
        <div class="card">
        <div class="card-title">${characters[i].name}</div>
        <img src="https://ihatov08.github.io${characters[i].image}" class="card-image">
        <div class="card-subtitle">【${characters[i].category}】</div>
      </div>
    `;
  }
};

allApi();

// 鬼殺隊
async function kisatsutaiApi() {
  const res = await fetch("https://ihatov08.github.io/kimetsu_api/api/kisatsutai.json");
  const characters = await res.json();

  for(let i = 0; i < characters.length; i++) {
    container.innerHTML += `
      <link rel="stylesheet" href="styles.css">
      <div class="card">
        <div class="card-title">${characters[i].name}</div>
        <img src="https://ihatov08.github.io${characters[i].image}" class="card-image">
        <div class="card-subtitle">【${characters[i].category}】</div>
      </div>
    `;
  }
}

// 柱
async function hashiraApi() {
  const res = await fetch("https://ihatov08.github.io/kimetsu_api/api/hashira.json");
  const characters = await res.json();

  for(let i = 0; i < characters.length; i++) {
    container.innerHTML += `
      <link rel="stylesheet" href="styles.css">
      <div class="card">
        <div class="card-title">${characters[i].name}</div>
        <img src="https://ihatov08.github.io${characters[i].image}" class="card-image">
        <div class="card-subtitle">【${characters[i].category}】</div>
      </div>
    `;
  }
};

// 鬼
async function oniApi() {
  const res = await fetch("https://ihatov08.github.io/kimetsu_api/api/oni.json");
  const characters = await res.json();

  for(let i = 0; i < characters.length; i++) {
    container.innerHTML += `
      <link rel="stylesheet" href="styles.css">
        <div class="card">
        <div class="card-title">${characters[i].name}</div>
        <img src="https://ihatov08.github.io${characters[i].image}" class="card-image">
        <div class="card-subtitle">【${characters[i].category}】</div>
      </div>
    `;
  }
};

// キャラクター選択時のAPI読み込み
function check_form() {
  let value = document.form.character;
  
  for(i = 0; i < value.length; i++) {
    if(value[i].checked) {
      loading.style.display = 'block';
      container.innerHTML = '';

      switch(value[i].value) {
        case "all":
        new Promise((resolve) => {
          setTimeout(() => {
            loading.style.display = 'none';
            resolve();
          }, 1000);
        }).then(() => {
          allApi();
        });
        break;
        case "kisatsutai":
          new Promise((resolve) => {
            setTimeout(() => {
              loading.style.display = 'none';
              resolve();
            }, 1000);
          }).then(() => {
            kisatsutaiApi();
          });
        break;
        case "hashira":
          new Promise((resolve) => {
            setTimeout(() => {
              loading.style.display = 'none';
              resolve();
            }, 1000);
          }).then(() => {
            hashiraApi();
          });
        break;
        case "oni":
          new Promise((resolve) => {
            setTimeout(() => {
              loading.style.display = 'none';
              resolve();
            }, 1000);
          }).then(() => {
            oniApi();
          });
        break;
      };
    };
  };
};
