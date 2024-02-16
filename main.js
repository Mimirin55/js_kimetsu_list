const container = document.getElementById('kimetsu_container');
document.getElementById("loading").style.display ="none";

async function callApi(value) {
  const res = await fetch(`https://ihatov08.github.io/kimetsu_api/api/${value.value}.json`);
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
  };
};

callApi(all);

function check_form() {
  let value = document.form.character;
  
  for(i = 0; i < value.length; i++) {
    if(value[i].checked) {
      loading.style.display = 'block';
      container.innerHTML = '';

      new Promise((resolve) => {
        setTimeout(() => {
          loading.style.display = 'none';
          resolve();
        }, 1000);
      }).then(() => {
        callApi(value);
      })
    };
  };
};
