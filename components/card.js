const Card = ({ children }) => (
  <div className="card">
    <style jsx>{`
      .card {
        background-color: #ffffff;
        padding: 2rem;
        margin: 2rem 0rem 2rem 0rem;
        box-shadow: 0px 1px 4px rgba(0,0,0,0.37);
        width: 100%;
        border-radius: 0.5rem;
      }
    `}
    </style>
    {children}
  </div>
)

export default Card
