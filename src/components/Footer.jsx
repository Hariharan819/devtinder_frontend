import React from 'react'

const footer = () => {
  return (
   <footer className="footer fixed bottom-0 rounded-sm sm:footer-horizontal footer-center text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Hariharan Dev</p>
  </aside>
</footer>
  )
}

export default footer