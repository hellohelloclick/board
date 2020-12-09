/**
 * @fileOverview This file has functions related to user index view. This view calling from application view.
 * Available Object:
 *	App.boards						: this object contain all boards(Based on logged in user)
 *	this.model						: user model.
 */
if (typeof App === 'undefined') {
    App = {};
}
/**
 * PushNotifictaionsIndex View
 * @class PushNotifictaionsIndex
 * @constructor
 * @extends Backbone.View
 */
App.PushNotifictaionsIndex = Backbone.View.extend({
    template: JST['templates/push_notifications'],
    tagName: 'tr',
    className: '',
    /**
     * Events
     * functions to fire on events (Mouse events, Keyboard Events, Frame/Object Events, Form Events, Drag Events, etc...)
     */
    events: {},
    /**
     * Constructor
     * initialize default values and actions
     */
    initialize: function() {
        if (!_.isUndefined(this.model) && this.model !== null) {
            this.model.showImage = this.showImage;
        }
        this.render();
    },
    /**
     * render()
     * populate the html to the dom
     * @param NULL
     * @return object
     *
     */
    render: function() {
        this.$el.html(this.template({
            user: this.model
        }));
        $('.js-admin-push_notifications-menu').addClass('active');
        $('.js-admin-activity-menu, .js-admin-setting-menu, .js-admin-email-menu, .js-admin-role-menu, .js-admin-board-menu', '.js-admin-user-menu', '.js-admin-users_logins-menu').removeClass('active');
        this.showTooltip();
        return this;
    },
});
