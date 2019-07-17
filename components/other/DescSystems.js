import DescSystem from './DescSystem';
export default function DescSystems({ systems = [] }) {
  return (
    <>
      <section>
        {systems.map((el, index) => {
          return <DescSystem system={el} key={index} reverse={index % 2 !== 0} />;
        })}
      </section>
      <style jsx>{`
        section {
          background-color: var(--gray-vis-color);
        }
      `}</style>
    </>
  );
}
