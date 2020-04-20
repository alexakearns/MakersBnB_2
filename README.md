# MakersBnB

## Project setup 
1. One member in your group, create a GitHub repo for your Makersbnb project.
2. Add the other members of your group as collaborators.
3. Add a README that has:
4. A description of the high level description of the spec.
5. A user stories section.
6. Start turning the specification into user stories.
7. Create a branch.
8. Add the user stories to the README.
9. Use the developer workflow to get the README merged into master.

## Headline Specification
1. Any signed-up user can list a new space.
2. Users can list multiple spaces.
3. Users should be able to name their space, provide a short description of the space, and a price per night.
4. Users should be able to offer a range of dates where their space is available.
5. Any signed-up user can request to hire any space for one night, and this should be approved by the user that owns that space.
6. Nights for which a space has already been booked should not be available for users to book that space.
7. Until a user has confirmed a booking request, that space can still be booked for that night.

## Nice-to-haves
- Users should receive an email whenever one of the following happens:
- They sign up
- They create a space
- They update a space
- A user requests to book their space
- They confirm a request
- They request to book a space
- Their request to book a space is confirmed
- Their request to book a space is denied
- Users should receive a text message to a provided number whenever one of the following happens:
- A user requests to book their space
- Their request to book a space is confirmed
- Their request to book a space is denied
- A ‘chat’ functionality once a space has been booked, allowing users whose space-booking request has been confirmed to chat with the user that owns that space
- Basic payment implementation though Stripe.

## Headline User Stories
```
User stories

As a signed-up user,
So others can see my space,
I would like to be able to list a new space.

As a user,
So others can see all my spaces,
I would like to be able to list multiple spaces.

As a user,
So that others can find out about my space,
I would like to be able provide a name, description, and price per night for my space.

As a user,
So that others know when my space is available,
I would like to be able to offer a range of dates where the space is available.
```
