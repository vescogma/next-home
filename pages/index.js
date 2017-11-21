import Head from 'next/head'

import Card from '../components/card'

import base from '../styles/base.css'

const Index = () => (
  <div>
    <Head>
      <title>Miguel Vesco</title>
      <meta key="viewport" name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="card-container">
      <div className="card-col">
        <Card>
          <span>CARD 1</span>
          <div className="title">
            Hello, my name is Miguel Vesco
          </div>
          <div className="imageWrap">
            <img src="static/images/me.jpg" />
          </div>
        </Card>
        <Card>
          <span>CARD 2</span>
        </Card>
        <Card>
          <span>CARD 3</span>
        </Card>
      </div>
      <div className="card-col">
        <Card>
          <span>CARD 4</span>
        </Card>
        <Card>
          <span>CARD 5</span>
        </Card>
        <Card>
          <span>CARD 6</span>
        </Card>
      </div>
    </div>
    <style jsx global>{base}</style>
    <style jsx>{`
      @custom-media --medium (min-width: 48rem);

      .card-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media (--medium) {
          flex-direction: row;
        }

        & .card-col {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
      }

      .title {
        font-size: 1.5rem;
      }

      .imageWrap {
        display: flex;
        align-items: center;
        justify-content: center;

        & img {
          max-height: 14rem;
          max-width: 14rem;
          min-height: 6rem;
          min-width: 6rem;
          height: 38vw;
          width: 38vw;
        }
      }
    `}</style>
  </div>
)

export default Index