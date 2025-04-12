import React, {useState} from 'react';
import EggSizzle from '../../assets/egg-sizzle-gif.gif';
import './Projects.css'

function Projects() {
  const [ mouseOverChomiryo, setMouseOverChomiryo ] = useState(false);
  const [ mouseOverPokeApi, setMouseOverPokeApi ] = useState(false);
  const [ mouseOverBlackjack, setMouseOverBlackjack ] = useState(false);
  const [ mouseOverAutoShop, setMouseOverAutoShop ] = useState(false);
  const [ mouseOverPopQuiz, setMouseOverPopQuiz ] = useState(false);
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
          <div id='poke-api'>
          </div>
        </div>
      </a>
      <a 
        href='https://blackjack.kylepixley.com'
        target="_blank"
        onMouseOver={() => setMouseOverBlackjack(true)}
        onMouseLeave={() => setMouseOverBlackjack(false)}>
        <div id='blackjack-border'>
          <div id='blackjack'>
          </div>
        </div>
      </a>
      <a 
        href='https://theautoshop.kylepixley.com'
        target="_blank"
        onMouseOver={() => setMouseOverAutoShop(true)}
        onMouseLeave={() => setMouseOverAutoShop(false)}>
        <div id='auto-shop-border'>
          <div id='auto-shop'>
          </div>
        </div>
      </a>
      <a 
        href='https://popquiz.kylepixley.com'
        target="_blank"
        onMouseOver={() => setMouseOverPopQuiz(true)}
        onMouseLeave={() => setMouseOverPopQuiz(false)}>
        <div id='pop-quiz-border'>
            <div id='pop-quiz'>
            </div>
        </div>
      </a>
    </div>
  )
}

export default Projects;