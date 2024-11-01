import React from 'react'
import './Projects.css'

function Projects() {
  return (
    <div id='projects-container'>

      <a href='https://www.pokeapi.kylepixley.com'>
        <div id='poke-api-border'>
          <div id='poke-api'>
          </div>
        </div>
      </a>

      <a href='https://blackjack.kylepixley.com'>
        <div id='blackjack-border'>
          <div id='blackjack'>
          </div>
        </div>
      </a>

      <a href='https://theautoshop.kylepixley.com'>
        <div id='auto-shop-border'>
          <div id='auto-shop'>
          </div>
        </div>
      </a>

      <a href='https://popquiz.kylepixley.com'>
        <div id='pop-quiz-border'>
            <div id='pop-quiz'>
            </div>
        </div>
      </a>

    </div>
  )
}

export default Projects;