import { Navbar } from '../components'

const Dashboard = () => {
  return (
    <div className="gradient min-h-screen text-white">
      <Navbar />
      <div className="h-screen">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-2xl font-bold">Dashboard </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard