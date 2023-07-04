import sytles from './Perfil.module.css'

const Perfil = ({ nomeUsuario }) => {
  return (
    <header className={sytles.header}>
      <img className={sytles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="" />
      <h1 className={sytles.name}>{nomeUsuario}</h1>
    </header>
  )
}

export default Perfil