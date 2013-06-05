DDO Forum Redirector
====================

Overview
--------

In April 2013 Turbine decide to update the DDO Forums as they change the old forums with the new ones they change the post access URLs, but they forget to rewrite the old URLs to the new ones.

That lack of attention have mainly two drawbacks:

1. In a couple of weeks they lost all the search engine index (and page-rank) associated to the forums.
2. All the bookmarks users had to the forums are now broken giving them 404 errors.

The first (and biggest) problem is out of the scope of this extension and can only be fixed by the DDO development team.

The second problem is the reason this extension was created, it allows to automatically redirect the old URLs to the new ones in a transparent way.

How it works?
-------------

When you try to access one of the old DDO Forums URLs like:

- http://forums.ddo.com/showthread.php?t=193439
- http://www.ddo.com/en/showthread.php?t=413296

You will get a 404 error, the equivalent brand new URLs looks like:

- http://ddo.com/forums/showthread.php/193439

The only thing the extension does is check for old URLs and rewrite them to the new ones avoiding the dirty and annoying 404 error.

Installation
-----------

Donwload, fork or clone de repository, you will get an SRC folder with the source code of the extension (fell free to update, optimize or fix and make a pull request)

You can use de developer mode for Chrome Extension and import the SRC files.

Alternatively you can use the CRX file to add the extension to Chrome, be aware that Chrome will warn you that the extension was not coming from the Chrome Store.