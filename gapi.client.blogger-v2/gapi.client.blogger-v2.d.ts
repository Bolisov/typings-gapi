// Type definitions for Google Blogger API v2
// Project: https://developers.google.com/blogger/docs/2.0/json/getting_started
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.blogger {
    
    interface Blog {
        // The description of this blog. This is displayed underneath the title.
        description?: string,
        // The identifier for this resource.
        id?: string,
        // The kind of this entry. Always blogger#blog
        kind?: string,
        // The locale this Blog is set to.
        locale?: {        
            // The country this blog's locale is set to.
            country?: string,
            // The language this blog is authored in.
            language?: string,
            // The language variant this blog is authored in.
            variant?: string,
        },        
        // The name of this blog. This is displayed as the title.
        name?: string,
        // The container of pages in this blog.
        pages?: {        
            // The URL of the container for pages in this blog.
            selfLink?: string,
            // The count of pages in this blog.
            totalItems?: number,
        },        
        // The container of posts in this blog.
        posts?: {        
            // The URL of the container for posts in this blog.
            selfLink?: string,
            // The count of posts in this blog.
            totalItems?: number,
        },        
        // RFC 3339 date-time when this blog was published.
        published?: string,
        // The API REST URL to fetch this resource from.
        selfLink?: string,
        // RFC 3339 date-time when this blog was last updated.
        updated?: string,
        // The URL where this blog is published.
        url?: string,
    }
    
    interface BlogList {
        // The list of Blogs this user has Authorship or Admin rights over.
        items?: Blog[],        
        // The kind of this entity. Always blogger#blogList
        kind?: string,
    }
    
    interface Comment {
        // The author of this Comment.
        author?: {        
            // The display name.
            displayName?: string,
            // The identifier of the Comment creator.
            id?: string,
            // The comment creator's avatar.
            image?: {            
                // The comment creator's avatar URL.
                url?: string,
            },            
            // The URL of the Comment creator's Profile page.
            url?: string,
        },        
        // Data about the blog containing this comment.
        blog?: {        
            // The identifier of the blog containing this comment.
            id?: string,
        },        
        // The actual content of the comment. May include HTML markup.
        content?: string,
        // The identifier for this resource.
        id?: string,
        // Data about the comment this is in reply to.
        inReplyTo?: {        
            // The identified of the parent of this comment.
            id?: string,
        },        
        // The kind of this entry. Always blogger#comment
        kind?: string,
        // Data about the post containing this comment.
        post?: {        
            // The identifier of the post containing this comment.
            id?: string,
        },        
        // RFC 3339 date-time when this comment was published.
        published?: string,
        // The API REST URL to fetch this resource from.
        selfLink?: string,
        // RFC 3339 date-time when this comment was last updated.
        updated?: string,
    }
    
    interface CommentList {
        // The List of Comments for a Post.
        items?: Comment[],        
        // The kind of this entry. Always blogger#commentList
        kind?: string,
        // Pagination token to fetch the next page, if one exists.
        nextPageToken?: string,
        // Pagination token to fetch the previous page, if one exists.
        prevPageToken?: string,
    }
    
    interface Page {
        // The author of this Page.
        author?: {        
            // The display name.
            displayName?: string,
            // The identifier of the Page creator.
            id?: string,
            // The page author's avatar.
            image?: {            
                // The page author's avatar URL.
                url?: string,
            },            
            // The URL of the Page creator's Profile page.
            url?: string,
        },        
        // Data about the blog containing this Page.
        blog?: {        
            // The identifier of the blog containing this page.
            id?: string,
        },        
        // The body content of this Page, in HTML.
        content?: string,
        // The identifier for this resource.
        id?: string,
        // The kind of this entity. Always blogger#page
        kind?: string,
        // RFC 3339 date-time when this Page was published.
        published?: string,
        // The API REST URL to fetch this resource from.
        selfLink?: string,
        // The title of this entity. This is the name displayed in the Admin user interface.
        title?: string,
        // RFC 3339 date-time when this Page was last updated.
        updated?: string,
        // The URL that this Page is displayed at.
        url?: string,
    }
    
    interface PageList {
        // The list of Pages for a Blog.
        items?: Page[],        
        // The kind of this entity. Always blogger#pageList
        kind?: string,
    }
    
    interface Post {
        // The author of this Post.
        author?: {        
            // The display name.
            displayName?: string,
            // The identifier of the Post creator.
            id?: string,
            // The Post author's avatar.
            image?: {            
                // The Post author's avatar URL.
                url?: string,
            },            
            // The URL of the Post creator's Profile page.
            url?: string,
        },        
        // Data about the blog containing this Post.
        blog?: {        
            // The identifier of the Blog that contains this Post.
            id?: string,
        },        
        // The content of the Post. May contain HTML markup.
        content?: string,
        // The identifier of this Post.
        id?: string,
        // The kind of this entity. Always blogger#post
        kind?: string,
        // The list of labels this Post was tagged with.
        labels?: string[],        
        // RFC 3339 date-time when this Post was published.
        published?: string,
        // The container of comments on this Post.
        replies?: {        
            // The URL of the comments on this post.
            selfLink?: string,
            // The count of comments on this post.
            totalItems?: string,
        },        
        // The API REST URL to fetch this resource from.
        selfLink?: string,
        // The title of the Post.
        title?: string,
        // RFC 3339 date-time when this Post was last updated.
        updated?: string,
        // The URL where this Post is displayed.
        url?: string,
    }
    
    interface PostList {
        // The list of Posts for this Blog.
        items?: Post[],        
        // The kind of this entity. Always blogger#postList
        kind?: string,
        // Pagination token to fetch the next page, if one exists.
        nextPageToken?: string,
        // Pagination token to fetch the previous page, if one exists.
        prevPageToken?: string,
    }
    
    interface User {
        // Profile summary information.
        about?: string,
        // The container of blogs for this user.
        blogs?: {        
            // The URL of the Blogs for this user.
            selfLink?: string,
        },        
        // The timestamp of when this profile was created, in seconds since epoch.
        created?: string,
        // The display name.
        displayName?: string,
        // The identifier for this User.
        id?: string,
        // The kind of this entity. Always blogger#user
        kind?: string,
        // This user's locale
        locale?: {        
            // The user's country setting.
            country?: string,
            // The user's language setting.
            language?: string,
            // The user's language variant setting.
            variant?: string,
        },        
        // The API REST URL to fetch this resource from.
        selfLink?: string,
        // The user's profile page.
        url?: string,
    }
    
    interface BlogsResource {
        // Gets one blog by id.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the blog to get.
            blogId: string,
        }) : gapi.client.Request<Blog>;        
        
    }
    
    
    interface CommentsResource {
        // Gets one comment by id.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // ID of the blog to containing the comment.
            blogId: string,
            // The ID of the comment to get.
            commentId: string,
            // ID of the post to fetch posts from.
            postId: string,
        }) : gapi.client.Request<Comment>;        
        
        // Retrieves the comments for a blog, possibly filtered.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // ID of the blog to fetch comments from.
            blogId: string,
            // Whether the body content of the comments is included.
            fetchBodies?: boolean,
            // Maximum number of comments to include in the result.
            maxResults?: number,
            // Continuation token if request is paged.
            pageToken?: string,
            // ID of the post to fetch posts from.
            postId: string,
            // Earliest date of comment to fetch, a date-time with RFC 3339 formatting.
            startDate?: string,
        }) : gapi.client.Request<CommentList>;        
        
    }
    
    
    interface PagesResource {
        // Gets one blog page by id.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // ID of the blog containing the page.
            blogId: string,
            // The ID of the page to get.
            pageId: string,
        }) : gapi.client.Request<Page>;        
        
        // Retrieves pages for a blog, possibly filtered.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // ID of the blog to fetch pages from.
            blogId: string,
            // Whether to retrieve the Page bodies.
            fetchBodies?: boolean,
        }) : gapi.client.Request<PageList>;        
        
    }
    
    
    interface PostsResource {
        // Get a post by id.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // ID of the blog to fetch the post from.
            blogId: string,
            // The ID of the post
            postId: string,
        }) : gapi.client.Request<Post>;        
        
        // Retrieves a list of posts, possibly filtered.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // ID of the blog to fetch posts from.
            blogId: string,
            // Whether the body content of posts is included.
            fetchBodies?: boolean,
            // Maximum number of posts to fetch.
            maxResults?: number,
            // Continuation token if the request is paged.
            pageToken?: string,
            // Earliest post date to fetch, a date-time with RFC 3339 formatting.
            startDate?: string,
        }) : gapi.client.Request<PostList>;        
        
    }
    
    
    interface BlogsResource {
        // Retrieves a list of blogs, possibly filtered.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // ID of the user whose blogs are to be fetched. Either the word 'self' (sans quote marks) or the user's profile identifier.
            userId: string,
        }) : gapi.client.Request<BlogList>;        
        
    }
    
    
    interface UsersResource {
        // Gets one user by id.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the user to get.
            userId: string,
        }) : gapi.client.Request<User>;        
        
        blogs: BlogsResource,
    }
    
}

declare module gapi.client.blogger {
    var blogs: gapi.client.blogger.BlogsResource; 
    
    var comments: gapi.client.blogger.CommentsResource; 
    
    var pages: gapi.client.blogger.PagesResource; 
    
    var posts: gapi.client.blogger.PostsResource; 
    
    var users: gapi.client.blogger.UsersResource; 
    
}
