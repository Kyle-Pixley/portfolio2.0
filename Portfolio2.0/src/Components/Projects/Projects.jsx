import React, {useState} from 'react';
import EggSizzle from '../../assets/egg-sizzle-gif.gif';
import './Projects.css'

function Projects() {
  const [ mouseOverChomiryo, setMouseOverChomiryo ] = useState(false);
  const [ mouseOverPokeApi, setMouseOverPokeApi ] = useState(false);
  const [ mouseOverBlackjack, setMouseOverBlackjack ] = useState(false);
  const [ mouseOverAutoShop, setMouseOverAutoShop ] = useState(false);
  const [ mouseOverPopQuiz, setMouseOverPopQuiz ] = useState(false);
  const [ mouseOverWatchList, setMouseOverWatchList ] = useState(false);
  return (
    <div id='projects-container'>

      <a 
        href='https://chomiryo.kylepixley.com'
        target="_blank"
        onMouseOver={() => setMouseOverChomiryo(true)}
        onMouseLeave={() => setMouseOverChomiryo(false)}>
        <div id='chomiryo-border'>

          { mouseOverChomiryo ? (
              <div className = 'mouse-over-parent'>
                <a href='https://github.com/Kyle-Pixley/chomiryo'
                    target='_blank'
                    className='mouse-over mouse-over-github'>
                  Github
                </a>
                <p className='mouse-over'>Deployed with AWS EC2</p>
                <p className='mouse-over'>MERN Stack Application</p>
                <h2 className='mouse-over'>Chomiryo</h2>
              </div>
            ): <div id='chomiryo'></div>
          }

        </div>
      </a>
      <a 
        href='https://www.pokeapi.kylepixley.com'
        target="_blank"
        onMouseOver={() => setMouseOverPokeApi(true)}
        onMouseLeave={() => setMouseOverPokeApi(false)}>
        <div id='poke-api-border'>

          { mouseOverPokeApi ? (
              <div className = 'mouse-over-parent'>
                <a href='https://github.com/Kyle-Pixley/PokeAPI'
                    target='_blank'
                    className='mouse-over mouse-over-github'>
                  Github
                </a>
                <p className='mouse-over'></p>
                <p className='mouse-over'>React front end application built with public API</p>
                <h2 className='mouse-over'>Pokemon</h2>
              </div>
            ): <div id='poke-api'></div>
          }

        </div>
      </a>
      <a 
        href='https://blackjack.kylepixley.com'
        target="_blank"
        onMouseOver={() => setMouseOverBlackjack(true)}
        onMouseLeave={() => setMouseOverBlackjack(false)}>
        <div id='blackjack-border'>

        { mouseOverBlackjack ? (
              <div className = 'mouse-over-parent'>
                <a href='https://github.com/Kyle-Pixley/the-games'
                    target='_blank'
                    className='mouse-over mouse-over-github'>
                  Github
                </a>
                <p className='mouse-over'></p>
                <p className='mouse-over'>React front end application built with public Card API</p>
                <h2 className='mouse-over'>Blackjack</h2>
              </div>
            ): <div id='blackjack'></div>
          }

        </div>
      </a>
      <a 
        href='https://theautoshop.kylepixley.com'
        target="_blank"
        onMouseOver={() => setMouseOverAutoShop(true)}
        onMouseLeave={() => setMouseOverAutoShop(false)}>
        <div id='auto-shop-border'>

        { mouseOverAutoShop ? (
              <div className = 'mouse-over-parent'>
                <a href='https://github.com/Kyle-Pixley/the-auto-shop'
                    target='_blank'
                    className='mouse-over mouse-over-github'>
                  Github
                </a>
                <p className='mouse-over'>React front end application. Simple business web front</p>
                <h2 className='mouse-over'>The Auto Shop</h2>
              </div>
            ): <div id='auto-shop'></div>
          }

        </div>
      </a>
      <a 
        href='https://popquiz.kylepixley.com'
        target="_blank"
        onMouseOver={() => setMouseOverPopQuiz(true)}
        onMouseLeave={() => setMouseOverPopQuiz(false)}>
        <div id='pop-quiz-border'>

        { mouseOverPopQuiz ? (
              <div className = 'mouse-over-parent'>
                <a href='https://github.com/Kyle-Pixley/pop-quiz'
                    target='_blank'
                    className='mouse-over mouse-over-github'>
                  Github
                </a>
                <p className='mouse-over'>React front end application built with public trivia API</p>
                <h2 className='mouse-over'>Pop Quiz</h2>
              </div>
            ): <div id='pop-quiz'></div>
          }

        </div>
      </a>
      <a
        href="https://watchlist.kylepixley.com"
        target='_blank'
        onMouseOver={() => setMouseOverWatchList(true)}
        onMouseLeave={() => setMouseOverWatchList(false)}>
          <div id='watch-list-border'>
            { mouseOverWatchList ? (
              <div className='mouse-over-parent'>
                <a href='https://github.com/Kyle-Pixley/WatchList'
                    target='_blank'
                    className='mouse-over mouse-over-github'>
                  Github
                </a>
                <p className='mouse-over'>Vanilla Javascript and Typescript application built with OMDBapi. Styled with TailWindCSS</p>
                <h2 className='mouse-over'>Watch List</h2>
              </div>
            ): <div id='watch-list'></div>
            }
          </div>

      </a>
    </div>
  )
}

export default Projects;