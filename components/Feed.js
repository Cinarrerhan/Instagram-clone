import React from 'react'
import Posts from './Posts'
import Stories from './Stories'

function Feed() {
  return (
    <main>
      <section>
        {/* Stories */}
        <Stories />

         {/* Posts */}
         <Posts />
      </section>

      <section>
        {/* Mini Profile */}

        {/* Suggections */}
      </section>
    </main>
  )
}

export default Feed
