# Opencast 16: Release Notes

## Opencast 16.0

Initial Release Notes Document for Opencast 16



### Features, Improvements and Behavior changes

- Replaced Solr Search with OpenSearch/Elasticsearch. [[#5597](https://github.com/opencast/opencast/pull/5597)] 
- Removed Paella 6 with OC 16. [[#5605](https://github.com/opencast/opencast/pull/5605)]
- Added Playlists. Playlists are a list of videos, similar to the same concept in YouTube. This provides an n:m mapping, meaning that every playlist can contain multiple videos, and each video can be included in multiple playlists. (As opposed to the 1:n mapping of Opencast series, where each video is part of at most one series.) [[#5478](https://github.com/opencast/opencast/pull/5478)]
- Added Playlists to Tobira Harvest API. [[#5734](https://github.com/opencast/opencast/pull/5734)]
- Whisper is the new default STT engine [[#5473](https://github.com/opencast/opencast/pull/5473)]
- Implemented the ability to define multiple custom roles and custom roles that need to be added [[#5312](https://github.com/opencast/opencast/pull/5312)]
- The default encoding profiles changed to be less restrictive about GOP size, giving the codec more opportunity to compress better.[[#5545](https://github.com/opencast/opencast/pull/5545)]
- Added the possibility to enable 360°videos with paella player 7. [[#5592](https://github.com/opencast/opencast/pull/5592)]
- Turned old admin interface into a plugin. This patch disables the old admin interface by default. Users can still activate this if they really want/need the old interface. [[#5811](https://github.com/opencast/opencast/pull/5811)] 





## Release Schedule

| Date              | Phase                    |
|-------------------|--------------------------|
| May 06, 2024      | Release Branch Cut       |
| June 12, 2024     | Release of Opencast 16.0 |


## Release Managers

- Lars Kiesow (Osnabrück University)
- Michael Schwenk (University of Bremen)
