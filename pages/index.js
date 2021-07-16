import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(props) {
   return(
      <Box >
         <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px'}}/>
         <hr />
         <p>
            <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
               @{props.githubUser}
            </a>
         </p>
         <hr />

         <AlurakutProfileSidebarMenuDefault />
      </Box>
   )
}

export default function Home() {
   const githubUser = 'PedroBarbosaSw';
   const comunidades = ['Alurakut'];
   const pessoasFavoritas = [
      'juunegreiros', 
      'omariosouto', 
      'peas', 
      'rafaballerini', 
      'marcobrunodev',
      'felipefialho'
   ]

   return (
      <>
         <AlurakutMenu />
         <MainGrid>
            <div className="profileArea" style={{ gridArea: 'profileArea' }}>
               <ProfileSidebar githubUser={githubUser}/>
            </div>
            <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
               <Box>
                  <h1 className="title">
                     Bem Vindo(a)
                  </h1>

                  <OrkutNostalgicIconSet />
               </Box>

               <Box>
                  <h2 className="subTitle">O que você deseja fazer?</h2>
                  <form onSubmit={function handleCriaComunidade(e) {
                     e.preventDefault();

                     comunidades.push('Alura Stars')
                  }}>
                     <div>
                        <input 
                           placeholder="Qual vai ser o noem da sua comunidade?" 
                           name="title" 
                           aria-label="Qual vai ser o noem da sua comunidade?"
                           type="text"
                        />
                     </div>
                     <div>
                        <input 
                           placeholder="Coloque uma URL para usarmos de capa" 
                           name="image" 
                           aria-label="Coloque uma URL para usarmos de capa"
                        />
                     </div>

                     <button>
                        Criar comunidade
                     </button>
                  </form>
               </Box>
            </div >
            <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
               <ProfileRelationsBoxWrapper>
                  <ul>
                     {
                        comunidades.map((itemAtual) => {
                           return (
                              <li>
                                 <a href={`/usrs/${itemAtual}`} key={itemAtual}>
                                    <img src={`http://placehold.it/300x300`} />
                                    <span>{itemAtual}</span>
                                 </a>
                              </li>
                           )
                        })
                     }
                  </ul>
               </ProfileRelationsBoxWrapper>
               <ProfileRelationsBoxWrapper >
                  <h2 className="smallTitle">
                     Pessoas da comunidade ({pessoasFavoritas.length})
                  </h2>
                  
                  <ul>
                     {
                        pessoasFavoritas.map((itemAtual) => {
                           return (
                              <li>
                                 <a href={`/usrs/${itemAtual}`} key={itemAtual}>
                                    <img src={`https://github.com/${itemAtual}.png`} />
                                    <span>{itemAtual}</span>
                                 </a>
                              </li>
                           )
                        })
                     }
                  </ul>
               </ProfileRelationsBoxWrapper>
            </div>
         </MainGrid>
      </>
   )
}
