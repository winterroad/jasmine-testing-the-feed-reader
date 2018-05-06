$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

/*TODO: change to forEach*/
        it('url is not empty', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

/*TODO: change to forEach*/
        it('name is defined and not empty', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined()
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    describe('The Menu', function() {
        let body = $('body');

        it('menu is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        it('menu changes visibility', function() {
            menu = $('.menu-icon-link');
            if (body.hasClass('menu-hidden')) {
                menu.click();
                expect(body.hasClass('menu-hidden')).toBe(false);
            }
            if (!(body.hasClass('menu-hidden'))) {
                menu.click();
                expect(body.hasClass('menu-hidden')).toBe(true);
            }
        });
    });

    describe('Initial Entries', function() {
        let entry;

        beforeEach(function(done) {
            loadFeed(0, function() {
                entry = $('.feed .entry');
                done();
            });
        });

        it('there is entry', function(done) {
            expect(entry.length).not.toBe(0);
            done();
        });
    });

    describe('New Feed Selection', function() {
        let feed0, feed1;



        beforeEach(function(done) {
            loadFeed(0, function() {
                feed0 = $('.feed').html();
                loadFeed(1, function() {
                    feed1 = $('.feed').html();
                    done();
                });
            });
        });
        it('new feed is not same as old feed', function() {
            expect(feed0).not.toEqual(feed1);
        });
    });
}());
