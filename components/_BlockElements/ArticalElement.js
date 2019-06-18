import ReactMarkdown from 'react-markdown';
import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';

export default function ArticalElement(props) {
  const [content, setContent] = useState('');
  useEffect(() => {
    fetch('static/articales/climate.md')
      .then(r => r.text())
      .then(res => {
        setContent(res);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <>
      <article className="container">
        <section className="content md-section">
          <ReactMarkdown source={content} />
        </section>
        <aside>
          <div className="content__main-image">
            <img src="/static/img/climate.jpg" alt="" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="content__slider">
            <button>
              <img src="/static/icons/arrow-left.svg" />
            </button>
            <div className="content__slider__image">
             <img src="/static/img/climate.jpg" alt="" style={{ width: '100%', height: '100%' }} />
            </div>
            <button>
              <img src="/static/icons/arrow-right.svg" />
            </button>
          </div>
        </aside>
      </article>
      <style jsx>{`
        .container {
          display: flex;
          width: 100%;
          margin: 0 20px;
          padding: 20px 0 20px 20px;
          background-color: var(--main-color);
        }
        .content {
          width: 50%;
          height: calc(100% - 40px);
          padding: 20px;
          margin-top: 0.5em;
          line-height: 1.5;
          overflow-y: scroll;
          flex-shrink: 0;
          background-color: var(--light-vis-color);
        }
        aside {
          display: flex;
          width: 100%;
          position: relative;
        }
        aside .content__main-image {
          position: absolute;
          top: -40px;
          right: -20px;
          width: 380px;
          height: 250px;
        }
        .content__slider {
          position: absolute;
          bottom: 20px;
          display: flex;
          width: 100%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        .content__slider__image {
          width: 250px;
          height: 165px;
          margin: 0 5px;
          border: 10px solid var(--light-vis-color);
        }
      `}</style>
    </>
  );
}
