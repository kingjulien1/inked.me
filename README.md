# Inked.me

a platform/instagram-extension for tattoo-artists. See where artists work at, as well as where they are travelling to.
in order to keep this project feasable, it will have only the most basic functionality to serve it's purposes.

## data schema

`users {} (next-auth)`

`artists { username: unique(string), name: string, created: date }`

`shops { shop: unique(string), name: string, location: geoHash, created: date }`

`guestspot { artist: string , shop: string, from: date, to: date }`

## user stories

these are the user stories for potential customers that want to retrieve information on artists/shops.

#### landing page

- user goes to landing page
- user sees a list of active upcoming guestspots/shops in their area
- user clicks on guestspot/shop/artist & get's redirected to the shop's/artist's page -> see next section

#### artist/shop page

- user can see the artist's profile image, as well as their latest posts
- user can see where this artist works at/ which artists work at this shop, as well as guestspots
- (maybe) user can see other suggested shops/artists based on current page

---

these are the user stories for artists that will use this site predominantly for administrative purposes.

#### landing page

- artist goes on landing page
- (if artist is already logged in, instead of register-button there will be a avatar-link redirecting to profile page)
- artist clicks "register as artist"-button
- modal opens with button sign-in with Instagram
- artist gets redirected & authorizes Instagram
- artist gets redirected after successful authentication to their profile page

#### profile page

- artist can view the shops they attend
- artist can press "create shop"-button & a modal opens, where they can enter the shop's tag & name (maybe instagram integration)
- artist can view the guest spots that are coming up, as well as canceling guest spots
- artist can press "sign out"-button to sign out

#### shop page

- artist can see and add/remove coworkers at this shop
- artist can see and add/edit/cancel upcoming guestspots
- artist can leave this shop
- artist can delete this shop if no other artists are listed under this shop

## tech stack

- next.js
- tailwindcss
- headlessui
- dgraph
- react-query
- nextauth.js
- vercel

## tickets

1. styling/ create mock-ups in figma

2. scaffold out initial pages with dummy data

- create some sort of navigation to get to relevant pages
- create pages `/`, `/[shop-/artist-name]`, `/profile`

3. add support for login with NextAuth via Instagram

- if user isn't authenticated & visits `/profile/*` redirect them to `/`
- if user is authenticated redirect to `/profile` page

4. connect to local dgraph docker instance to replace dummy data & work with database

- use dgraph
- update nextauth to store users in dgraph database
- create schema for artists & shops
- inject some dummy data

5. add basic support for shop management

- add react-query & react-hook-form
- implment modal to create shop, if possible redirect to shop page
- implement modal to add another artist to this shop
- implement modal to set-up a guest-spot for another artist
- implement edit/delete options for artists/guestspots
