// app/components/Hero/Hero.tsx

'use client'

import styles from './Hero.module.css'

// Define the hover colors: vibrant pink, mellow green, and blue
const hoverColors = ['#ff00ff', '#00ffcc', '#61dafb'] // Pink, Green, Blue

export default function Hero() {
  // Create random clusters of grid items
  const createGrid = () => {
    const gridClusters = []
    const shapes = ['square', 'circle', 'triangle']

    // Generate 100 random clusters (each cluster has a random number of items)
    for (let i = 0; i < 100; i++) {
      const clusterSize = Math.floor(Math.random() * 5) + 1 // Random cluster size between 1 and 5
      const clusterColor = hoverColors[Math.floor(Math.random() * hoverColors.length)] // Pick a random hover color

      const clusterItems = []
      for (let j = 0; j < clusterSize; j++) {
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)]
        clusterItems.push(
          <div
            key={`${i}-${j}`}
            className={`${styles.gridItem} ${styles[randomShape]}`}
            style={{ '--hover-color': clusterColor }} // Set the random hover color using a CSS variable
          ></div>
        )
      }

      gridClusters.push(
        <div key={i} className={styles.cluster}>
          {clusterItems}
        </div>
      )
    }

    return gridClusters
  }

  return (
    <section className={styles.hero}>
      <div className={styles.grid}>
        {createGrid()}
      </div>
    </section>
  )
}
