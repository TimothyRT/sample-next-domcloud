import { Button } from '@/components/Button';
import { VBoxContainer } from '@/components/BoxContainer';

export default function Page() {
  return (
    <div>
      Baby monkey goes whhhheeee
      <VBoxContainer>
        <Button>Press me</Button>
        <Button variant='outline'>Click me</Button>
        <Button variant='text'>Kill me</Button>
      </VBoxContainer>
    </div>
  )
}