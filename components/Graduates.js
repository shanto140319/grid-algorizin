import React from 'react';
import style from '../styles/graduates.module.css';
import Carousel from 'react-elastic-carousel';
const data = [
  {
    image: 'https://www.algorizin.com/wp-content/uploads/2021/04/2-120x120.png',
    desc:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sapiente, aut in fugiat quaerat eos id cum! Dolorum inventore quam aspernatur impedit. Temporibus ducimus voluptatum cupiditate illo reprehenderit error rem! ',
    title: 'software development engineer',
    name: 'jahidul haque shanto',
  },
  {
    image: 'https://www.algorizin.com/wp-content/uploads/2021/04/2-120x120.png',
    desc:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sapiente, aut in fugiat quaerat eos id cum! Dolorum inventore quam aspernatur impedit. Temporibus ducimus voluptatum cupiditate illo reprehenderit error rem! ',
    title: 'software development engineer',
    name: 'jahidul haque shanto',
  },
  {
    image: 'https://www.algorizin.com/wp-content/uploads/2021/04/2-120x120.png',
    desc:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sapiente, aut in fugiat quaerat eos id cum! Dolorum inventore quam aspernatur impedit. Temporibus ducimus voluptatum cupiditate illo reprehenderit error rem! ',
    title: 'software development engineer',
    name: 'jahidul haque shanto',
  },
  {
    image: 'https://www.algorizin.com/wp-content/uploads/2021/04/4-120x120.png',
    desc:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sapiente, aut in fugiat quaerat eos id cum! Dolorum inventore quam aspernatur impedit. Temporibus ducimus voluptatum cupiditate illo reprehenderit error rem! ',
    title: 'software development engineer',
    name: 'jahidul haque shanto',
  },
  {
    image: 'https://www.algorizin.com/wp-content/uploads/2021/04/2-120x120.png',
    desc:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sapiente, aut in fugiat quaerat eos id cum! Dolorum inventore quam aspernatur impedit. Temporibus ducimus voluptatum cupiditate illo reprehenderit error rem! ',
    title: 'software development engineer',
    name: 'jahidul haque shanto',
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1000, itemsToShow: 2 },
];
const Graduates = () => {
  return (
    <div className={style.bg}>
      <section className='section'>
        <h2>Meet Some of Our Graduates</h2>
        <p>
          Learn from those who know us the best. Read the experiences of some of
          the students who’ve landed jobs after receiving mentorship from our
          team.
        </p>

        <div className={style.carousel}>
          <Carousel breakPoints={breakPoints}>
            {data.map((item, index) => {
              return (
                <div key={index} className={style.carouselItem}>
                  <img src={item.image} alt='' />
                  <p className={style.desc}>{`" ${item.desc}"`}</p>
                  <h5>{item.name}</h5>
                  <p>{item.title}</p>
                </div>
              );
            })}
          </Carousel>
        </div>

        <h2>Jumpstart your career with us!</h2>
        <button className='btn'>apply now</button>
      </section>
    </div>
  );
};

export default Graduates;
