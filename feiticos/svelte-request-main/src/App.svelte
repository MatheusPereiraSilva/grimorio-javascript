<script lang="ts">
  import Titulo from "./components/Titulo.svelte";
  import Usuario from "./components/Usuario.svelte";
  import type Irepositorio from "./interfaces/IRepositorio";
  import type IUsuario from "./interfaces/IUsuario";
  let valorInput = '';

  let statusDeErro: null | number = null

  let ususario: IUsuario | null= null;

	async function aoSubmeter(){
   const respostaUsuario = await fetch(`https://api.github.com/users/${valorInput}`);
   const repositorios = await fetch(`https://api.github.com/users/${valorInput}/repos?sort=created&per_page=5`);

   if (respostaUsuario.ok && repositorios.ok){
    const dadosUsuario = await respostaUsuario.json();
    const dadosRpositorios = await repositorios.json();
    const repositorios_recentes = dadosRpositorios.map((repositorio)=>{
      return {
        nome: repositorio.name,
        url: repositorio.url,
      } as Irepositorio;
    })
    ususario = {
    avatar_url: dadosUsuario.avatar_url,
    login: dadosUsuario.login,
    nome: dadosUsuario.name,
    perfil_url: dadosUsuario.html_url,
    repositorios_publicos: dadosUsuario.public_repos,
    seguidores: dadosUsuario.followers,
    repositorios_recentes: repositorios_recentes,
  }
  statusDeErro = null
   } else {
    statusDeErro = respostaUsuario.status
   }

   
  };
</script>

<div class="app">
	<header>
		<Titulo/>
	</header>
	<div class="busca-usuario">
		<form on:submit|preventDefault={aoSubmeter}>
			<input
      type="text"
      class="input"
      class:erro-input={statusDeErro === 404}
      bind:value={valorInput}
      placeholder="Pesquise aqui o usuário"
      
      >
      {#if statusDeErro === 404}
      <span class="erro">Usuário não encontrado!!</span>
      {/if}
			<div class="botao-container">
				<button type="submit" class="botao">Buscar</button>
			</div>
		</form>
	</div>
</div>
{#if ususario}
  <Usuario ususario={ususario}/>
{/if}

<style>
	.app {
    max-height: 100vh;
		max-width: 100%;
  }

  header {    
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
	.busca-usuario {
    position: relative;
    width: 60%;
    top: -50px;
    left: 300px;
  }

  .input {
    padding: 15px 25px;
    width: calc(100% - 8.75rem);
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #2e80fa;
    box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
    outline: 0;
  }

  .input::placeholder {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 300;
    font-size: 19.5px;
    line-height: 26px;
    color: #6e8cba;
  }

  .botao-container {
    position: absolute;
    width: 9.625rem;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
  }

  .botao {
    padding: 15px 24px;
    border-radius: 8px;
    border: none;
    background: #2e80fa;
    line-height: 26px;
    color: #fff;
    font-size: 22px;
    cursor: pointer;

    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    gap: 13px;
  }

  .botao:hover {
    background: #4590ff;
  }
  .erro {
    position: absolute;
    bottom: -25px;
    left: 0;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    z-index: -1;
    color: #ff003e;
  }
  .erro-input{
    border: 1px solid #ff003e;
  }
</style>