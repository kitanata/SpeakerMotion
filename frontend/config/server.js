/* Define custom server-side HTTP routes for lineman's development server
 *   These might be as simple as stubbing a little JSON to
 *   facilitate development of code that interacts with an HTTP service
 *   (presumably, mirroring one that will be reachable in a live environment).
 *
 * It's important to remember that any custom endpoints defined here
 *   will only be available in development, as lineman only builds
 *   static assets, it can't run server-side code.
 *
 * This file can be very useful for rapid prototyping or even organically
 *   defining a spec based on the needs of the client code that emerge.
 *
 */

module.exports = {
  drawRoutes: function(app) {
    app.post('/login', function(req, res) {
      res.json({ message: 'logging in!' });
    });

    app.post('/logout', function(req, res) {
      res.json({ message: 'logging out!'});
    });

    app.get('/api/proposals', function(req, res) {
      res.json([
        {id: 1, title: 'Python in the Cloud', speaker: 'Raymond Chandler III', length:45, rating: 3},
        {id: 2, title: 'Ruby in the Cloud', speaker: 'John Barrowman', length:90, rating: 4},
        {id: 3, title: 'Angular Bootcamp', speaker: 'William Hartnel', length:60, rating: 2.2},
        {id: 4, title: 'Strength in leadership', speaker: 'Matt Smith', length:45, rating: 4.1},
        {id: 5, title: 'Introduction to Backbone', speaker: 'David Tennet', length:15, rating: 5},
        {id: 6, title: 'Introduction to JavaScript', speaker: 'Jewel Staite', length:15, rating: 1},
        {id: 7, title: 'Java is dead. Long live Java.', speaker: 'Christoper Ecclesten', length:15, rating: 1.5},
        {id: 8, title: 'Startups and SaSS', speaker: 'John Hurt', length:15, rating: 2.2},
        {id: 9, title: 'Leaving Las Vargas', speaker: 'David Tennet', length:15, rating: 3.6},
        {id: 10, title: 'Startups and SaSS', speaker: 'Raymond Chander III', length:15, rating: 4},
        {id: 11, title: 'SaSSy Things', speaker: 'William Defoe', length:15, rating: 4.3},
      ]);
    });

    app.get('/api/reviews', function(req, res) {
      res.json([
        {id: 1, reviewer: 1, talk: 1, rating: 3},
        {id: 2, reviewer: 1, talk: 2, rating: 4},
        {id: 3, reviewer: 2, talk: 3, rating: 2.2},
        {id: 4, reviewer: 2, talk: 4, rating: 4.1},
        {id: 5, reviewer: 3, talk: 5, rating: 5},
        {id: 6, reviewer: 3, talk: 6, rating: 1},
        {id: 7, reviewer: 4, talk: 7, rating: 1.5},
        {id: 8, reviewer: 4, talk: 8, rating: 2.2},
        {id: 9, reviewer: 5, talk: 9, rating: 3.6},
        {id: 10, reviewer: 5, talk: 10, rating: 4},
        {id: 11, reviewer: 6, talk: 11, rating: 4.3},
        {id: 12, reviewer: 6, talk: 1, rating: 3},
        {id: 13, reviewer: 7, talk: 2, rating: 4},
        {id: 14, reviewer: 7, talk: 3, rating: 2.2},
        {id: 15, reviewer: 8, talk: 4, rating: 4.1},
        {id: 16, reviewer: 8, talk: 5, rating: 5},
        {id: 17, reviewer: 9, talk: 6, rating: 1},
        {id: 18, reviewer: 10, talk: 7, rating: 1.5},
        {id: 19, reviewer: 10, talk: 8, rating: 2.2},
        {id: 20, reviewer: 11, talk: 9, rating: 3.6},
        {id: 21, reviewer: 11, talk: 10, rating: 4},
        {id: 22, reviewer: 1, talk: 11, rating: 4.3},
      ]);
    });

    app.get('/api/speakers', function(req, res) {
      res.json([
        {id: 1, speaker: 'Raymond Chandler III', bio: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."},
        {id: 2, speaker: 'John Barrowman', bio: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."},
        {id: 3, speaker: 'William Hartnel', bio: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."},
        {id: 4, speaker: 'Matt Smith', bio: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."},
        {id: 5, speaker: 'David Tennet', bio: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."},
      ]);
    });

    app.get('/api/event/:id', function(req, res) {
      var items = [
        {id: 1, name: 'RubyCon', img: '/img/startup_weekend.jpg', goal: 100, received: 10, reviewed: 5, app_link: 'http://spkrmo.co/5fQz2348'},
        {id: 2, name: 'PyOhio', img: '/img/demo1.jpg', goal: 50, received: 20, reviewed: 10, app_link: 'http://spkrmo.co/416HZ2f3'},
        {id: 3, name: 'CodeMash', img: '/img/demo2.jpg', goal: 10, received: 5, reviewed: 3, app_link: 'http://spkrmo.co/2yzk85g3'},
        {id: 4, name: 'Thingaplooza', img: '/img/startup_weekend.jpg', goal: 100, received: 50, reviewed: 30, app_link: 'http://spkrmo.co/ZY728kk2g'},
        {id: 5, name: 'MakerFair', img: '/img/demo2.jpg', goal: 80, received: 60, reviewed: 40, app_link: 'http://spkrmo.co/5fQz2348'},
      ];

      for(var i=0; i < items.length; i++) {
        items[i].description = "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.";
      }

      if(req.query.id) {
        return res.json(items[req.query.id - 1]);
      }
      else {
        return res.json(items);
      }
    });

    app.get('/api/event/:id/rooms', function(req, res) {
      res.json([
        {id: 1, event: 1, name: 'Cartoon 1'},
        {id: 1, event: 1, name: 'Cartoon 2'},
        {id: 1, event: 1, name: 'Jefferson Hall'},
        {id: 1, event: 1, name: 'William Center'},
        {id: 1, event: 1, name: 'Grand Ballroom'},
        ]);
    });

    app.get('/api/unscheduled', function(req, res) {
      res.json([
        {id: 1, event: 1, talk: 1},
        {id: 1, event: 1, talk: 2},
        {id: 1, event: 1, talk: 3},
        {id: 1, event: 1, talk: 4},
        {id: 1, event: 1, talk: 5},
        ]);
    });
  }
};
