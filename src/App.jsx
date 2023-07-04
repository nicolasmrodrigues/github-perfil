import { useState } from "react"

import Perfil from "./components/Perfil"
import Formulario from "./components/Formulario"
import ReposList from "./components/ReposList"

function App() {
  const [formEstaVisivel, setFormEstaVisivel] = useState(0)
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
      <input type="text" onBlur={e => setNomeUsuario(e.target.value)} />
      {nomeUsuario.length > 2 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario}></ReposList>
        </>
      )}
    </>
  )
}

export default App
