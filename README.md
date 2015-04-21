# Drone Track

## Problem

A client would like a real-time dashboard where they can deploy a drone already available on the clients job site with a push of a button and track the position of the drone as it follows the pre-planned path laid out for it. The drone flies at a speed of 10 meters / second. The drones position should be displayed on a map and move as the drone flies around in the physical world. Because we are for obvious reasons not going to be using a real drone, part of this problem is to build a way to mock out the drones flight and update your dashboard accordingly. The client has also requested that the dasboard have a way to pause the drone mid-flight and if necessary abort the drone mid-flight and have it return to it's starting position.

## Minimum Requirements

- Your final application should have a backend and a frontend component
- The backend component is reponsible for informing the frontend of the drones location in near realtime.
- Drone should follow the pre-planned route
- You should write some tests. You do not need full test coverage but they must be relevant.
- Include a README describing the application and how to get it to run
- When submitting your app please specify approximately how long it took you to build

## Hints

- Leaflet and Mapbox are very useful libraries for mapping
- Your backend component can make use of a realtime BAAS like Firebase if you don't feel like building your own
- The drone's path way-points has been provided to you in the ```waypoints.txt``` file as an array of latitude and longitude coordinates.
- You may find reading this http://www.movable-type.co.uk/scripts/latlong.html useful
