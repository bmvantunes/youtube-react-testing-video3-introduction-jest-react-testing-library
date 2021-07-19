import { Counter } from '../components/Counter';

export default function Home() {
  return (
    <div>
      <h1>Hello React.js Testing Series Friends!!!</h1>
      <Counter description="My Counter" defaultCount={0} />
    </div>
  );
}
