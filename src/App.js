import { lazy, Suspense} from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallBack from './ErrorFallBack';

// Loading them only when they are actually needed, not when the initial bundle is loaded
const UserCard = lazy(() => import('./UserCard'));

function App() {

  return (
    <div style={{ padding: '30px' }}>
      <ErrorBoundary FallbackComponent={ErrorFallBack}>{/*OR fallback={<p>Error is occuured in your compom....nent</p>}*/}
        <Suspense fallback={<p>Loading.........</p>}>
          <UserCard name="Tarnvir Singh" status="online" />
          <UserCard name="Alex Doe" status="offline" />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
