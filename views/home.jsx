const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <a href="/places">
              <button className="btn-primary">Places Page</button></a>
              <div>
                <img src="/images/fruit-cups.jpg" alt="fruit cups"/>
                <div>
                Photo by <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
              </div>

          </main>
      </Def>
    )
  }
  

module.exports = home
