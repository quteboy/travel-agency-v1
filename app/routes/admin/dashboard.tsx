import { Header, StatsCard, TripCard } from "../../../components";
import { dboardStats, allTrips } from "~/constants";

const dashboard = () => {
  const user = { name: "Adrian" };
  return (
    <div className="dashboard wrapper">
      <Header
        title={`Welcome ${user.name}`}
        description={`Track activities, trends and popular destinations`}
      />
      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            headerTitle="Total Users"
            total={dboardStats.totalUsers}
            currentMonthCount={dboardStats.usersJoined.currentMonth}
            lastMonthCount={dboardStats.usersJoined.lastMonth}
          />
          <StatsCard
            headerTitle="Total Trips"
            total={dboardStats.totalTrips}
            currentMonthCount={dboardStats.tripsCreated.currentMonth}
            lastMonthCount={dboardStats.tripsCreated.lastMonth}
          />
          <StatsCard
            headerTitle="Active Users Today"
            total={dboardStats.userRole.total}
            currentMonthCount={dboardStats.userRole.currentMonth}
            lastMonthCount={dboardStats.userRole.lastMonth}
          />
        </div>
      </section>
      <section className="container">
        <h1 className="text-xl font-semibold text-dark-100">Created Trips</h1>
        <div className="trip-grid">
          {allTrips.slice(0, 4).map((item) => {
            const {
              id,
              name,
              imageUrls,
              itinerary,
              tags,
              estimatedPrice,
            } = item;
            return (
              <TripCard
                key={id}
                id={id.toString()}
                name={name}
                imageUrl={imageUrls[0]}
                location={itinerary?.[0]?.location ?? ''}
                tags={tags}
                price={estimatedPrice}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default dashboard;
