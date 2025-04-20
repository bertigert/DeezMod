"use strict";(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[1421],{A2sV:(t,r,e)=>{e.d(r,{$1e:()=>Xr,$FS:()=>ae,$IV:()=>Vt,A22:()=>Rr,AgB:()=>hr,B1A:()=>I,BMS:()=>mt,BXP:()=>Re,CwG:()=>er,D2L:()=>Nr,DI4:()=>ce,DNU:()=>ve,Dh1:()=>se,DpH:()=>Nt,Dvu:()=>y,EG:()=>Bt,FJX:()=>Ze,Ggf:()=>Rt,H91:()=>Ce,Hi1:()=>Zt,HwP:()=>xe,I7O:()=>Me,IoY:()=>de,JDV:()=>mr,KDJ:()=>vr,LLq:()=>or,LQK:()=>Ne,LrA:()=>c,M7C:()=>Be,Mij:()=>a,MmF:()=>fe,N$N:()=>u,N6A:()=>$t,O7r:()=>vt,OD9:()=>nr,ONi:()=>si,ORW:()=>Sr,PKC:()=>ze,QNb:()=>wr,RsC:()=>Yr,SNU:()=>ir,TF:()=>kr,T_E:()=>Ir,U3y:()=>xt,UJq:()=>Wt,V9d:()=>Tt,Wyk:()=>ur,XAQ:()=>Mr,XBt:()=>Kt,Y1z:()=>Dt,Ypw:()=>Ut,ZO1:()=>dt,_At:()=>Fe,a40:()=>we,aZE:()=>Fr,by3:()=>l,ct1:()=>f,dj:()=>kt,efT:()=>me,epo:()=>rr,fL0:()=>Te,fSF:()=>xr,g1V:()=>tr,gWG:()=>Cr,iqi:()=>o,kqj:()=>Ht,kuS:()=>Gr,l4E:()=>ee,mAL:()=>sr,mcr:()=>Zr,nPg:()=>Ge,nZ$:()=>te,oih:()=>ft,ovp:()=>zr,qAq:()=>Xe,rb0:()=>$,rdE:()=>d,sJs:()=>ti,sV3:()=>n,sfq:()=>Ft,t1v:()=>$e,tjO:()=>Tr,u0N:()=>St,v4u:()=>ei,vi:()=>m,vjx:()=>ht,w8_:()=>he,we3:()=>Ye,weQ:()=>Ct,wgW:()=>fr,wi_:()=>lr,x87:()=>Br,xxF:()=>jt,y02:()=>Se,yJp:()=>ke,yRK:()=>gr});var i=e("Au7y");const s={};let n=function(t){return t.ALPHA="ALPHA",t.NONE="NONE",t.RANK="RANK",t.RELEASE_DATE="RELEASE_DATE",t}({}),a=function(t){return t.COMPILATION="COMPILATION",t.KARAOKE="KARAOKE",t.LIVE="LIVE",t.STUDIO="STUDIO",t}({}),o=function(t){return t.ALBUM="ALBUM",t.EP="EP",t.SINGLES="SINGLES",t.UNKNOWN="UNKNOWN",t}({}),c=function(t){return t.AUDIO="AUDIO",t.EXPLICIT_CONTENT="EXPLICIT_CONTENT",t.OTHER="OTHER",t.WRONG_ARTIST="WRONG_ARTIST",t}({}),u=function(t){return t.ARTIST_ALREADY_EXIST="ARTIST_ALREADY_EXIST",t.EXPLICIT_CONTENT="EXPLICIT_CONTENT",t.OTHER="OTHER",t.WRONG_PICTURE="WRONG_PICTURE",t}({}),d=function(t){return t.AUDIO="AUDIO",t.EXPLICIT_CONTENT="EXPLICIT_CONTENT",t.OTHER="OTHER",t.WRONG_ARTIST="WRONG_ARTIST",t}({}),l=function(t){return t.FEATURED="FEATURED",t.MAIN="MAIN",t}({}),$=function(t){return t.ALL="ALL",t.NON_OFFICIAL="NON_OFFICIAL",t.OFFICIAL="OFFICIAL",t}({}),I=function(t){return t.DEFAULT="DEFAULT",t.DISCOVERY="DISCOVERY",t}({}),m=function(t){return t.CANCELLED="CANCELLED",t.ENDED="ENDED",t.PENDING="PENDING",t.STARTED="STARTED",t}({}),y=function(t){return t.ARTISTS_PICKER="ARTISTS_PICKER",t.IMPROVE="IMPROVE",t.MUSIC_TOGETHER="MUSIC_TOGETHER",t.WELCOME="WELCOME",t}({}),f=function(t){return t.DEEZER_SESSION="DEEZER_SESSION",t.DOCUMENTARY="DOCUMENTARY",t.INTERVIEW="INTERVIEW",t.REPLAY="REPLAY",t.TRAILER="TRAILER",t}({});const g=i.J1`
	fragment PictureXSmall on Picture {
		id
		xxx_small: urls(pictureRequest: {width: 40, height: 40})
		explicitStatus
	}
`,S=i.J1`
	fragment PlaylistAssistantTrack on Track {
		id
		title
		album {
			id
			displayTitle
			cover {
				...PictureXSmall
			}
		}
		contributors {
			edges {
				node {
					... on Artist {
						id
						name
					}
				}
			}
		}
		duration
		media {
			id
		}
		isExplicit
	}
	${g}
`,p=i.J1`
	fragment PictureSmall on Picture {
		id
		small: urls(pictureRequest: {height: 100, width: 100})
		explicitStatus
	}
`,T=i.J1`
	fragment PictureMedium on Picture {
		id
		medium: urls(pictureRequest: {width: 264, height: 264})
		explicitStatus
	}
`,A=i.J1`
	fragment PictureLarge on Picture {
		id
		large: urls(pictureRequest: {width: 500, height: 500})
		explicitStatus
	}
`,v=i.J1`
	fragment PlaylistBase on Playlist {
		id
		picture {
			...PictureSmall
			...PictureMedium
			...PictureLarge
		}
		title
	}
	${p}
	${T}
	${A}
`,P=i.J1`
	fragment PlaylistInfo on Playlist {
		...PlaylistBase
		description
		isPrivate
		isCollaborative
	}
	${v}
`,h=i.J1`
	fragment SynchronizedLines on Lyrics {
		id
		synchronizedLines {
			lrcTimestamp
			line
			lineTranslated
			milliseconds
			duration
		}
	}
`,b=i.J1`
	fragment SynchronizedWordByWordLines on Lyrics {
		id
		synchronizedWordByWordLines {
			start
			end
			words {
				start
				end
				word
			}
		}
	}
`,C=i.J1`
	fragment SidebarPlaylistsInfo on Playlist {
		isFromFavoriteTracks
		isCollaborative
		id
		title
		owner {
			id
			name
		}
		picture {
			...PictureSmall
		}
	}
	${p}
`,E=i.J1`
	fragment AlbumSearchHistory on Album {
		id
		displayTitle
		contributors {
			edges {
				node {
					... on Artist {
						id
						name
					}
				}
			}
		}
		cover {
			...PictureSmall
		}
	}
	${p}
`,k=i.J1`
	fragment ArtistSearchHistory on Artist {
		id
		name
		fansCount
		picture {
			...PictureSmall
		}
	}
	${p}
`,L=i.J1`
	fragment EpisodeSearchHistory on PodcastEpisode {
		id
		title
		publicationDate
		podcast {
			id
			displayTitle
			cover {
				...PictureSmall
			}
		}
	}
	${p}
`,F=i.J1`
	fragment LiveStreamSearchHistory on Livestream {
		id
		name
		isOnStream
		cover {
			...PictureSmall
		}
	}
	${p}
`,J=i.J1`
	fragment PlaylistSearchHistory on Playlist {
		id
		title
		owner {
			id
			name
		}
		picture {
			...PictureSmall
		}
	}
	${p}
`,R=i.J1`
	fragment PodcastSearchHistory on Podcast {
		id
		displayTitle
		description
		cover {
			...PictureSmall
		}
	}
	${p}
`,q=i.J1`
	fragment TrackSearchHistory on Track {
		id
		title
		contributors {
			edges {
				node {
					... on Artist {
						id
						name
					}
				}
			}
		}
		album {
			id
			displayTitle
			cover {
				...PictureSmall
			}
		}
	}
	${p}
`,N=i.J1`
	fragment AlbumBase on Album {
		id
		displayTitle
		cover {
			...PictureSmall
			...PictureMedium
			...PictureLarge
		}
		releaseDate
		isFavorite
		isExplicit
	}
	${p}
	${T}
	${A}
`,O=i.J1`
	fragment AlbumContributors on Album {
		contributors {
			edges {
				cursor
				roles
				node {
					... on Artist {
						id
						name
						picture {
							...PictureSmall
							...PictureMedium
							...PictureLarge
						}
						isFavorite
						fansCount
					}
				}
			}
		}
	}
	${p}
	${T}
	${A}
`,x=i.J1`
	fragment AlbumMasthead on Album {
		...AlbumBase
		...AlbumContributors
		duration
		fansCount
	}
	${N}
	${O}
`,_=i.J1`
	fragment ArtistConcert on Artist {
		concerts(first: 1) {
			edges {
				node {
					id
					name
					date
					location
				}
			}
		}
	}
`,B=i.J1`
	fragment ArtistLiveEvents on Artist {
		liveEvents(
			first: $liveEventsFirst
			types: [CONCERT, FESTIVAL]
			statuses: [PENDING]
		) {
			edges {
				node {
					id
					name
					startDate
					cityName
					countryCode
					types {
						isConcert
						isFestival
						isLivestreamConcert
						isLivestreamFestival
					}
					venue
				}
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
	}
`,D=i.J1`
	fragment ArtistLiveEventsByProximity on Artist {
		liveEventsByProximity(first: $liveEventsByProximityFirst) {
			edges {
				node {
					id
					name
					startDate
					cityName
					countryCode
					types {
						isConcert
						isFestival
						isLivestreamConcert
						isLivestreamFestival
					}
					venue
				}
			}
		}
	}
`,M=i.J1`
	fragment ArtistBase on Artist {
		id
		name
		fansCount
		hasSmartRadio
		isFavorite
		picture {
			...PictureSmall
			...PictureMedium
			...PictureLarge
		}
	}
	${p}
	${T}
	${A}
`,U=i.J1`
	fragment ArtistBio on Artist {
		bio {
			full
		}
	}
`,w=i.J1`
	fragment ArtistSocial on Artist {
		social {
			twitter
			facebook
			website
		}
	}
`,H=i.J1`
	fragment ArtistMasthead on Artist {
		...ArtistBase
		...ArtistBio
		...ArtistSocial
		onTour
		status
	}
	${M}
	${U}
	${w}
`,G=i.J1`
	fragment SearchArtist on Artist {
		id
		isFavorite
		name
		fansCount
		picture {
			...PictureLarge
		}
	}
	${A}
`,W=i.J1`
	fragment BestResultArtist on Artist {
		...SearchArtist
		hasSmartRadio
		hasTopTracks
	}
	${G}
`,z=i.J1`
	fragment SearchAlbum on Album {
		id
		displayTitle
		isFavorite
		releaseDateAlbum: releaseDate
		isExplicitAlbum: isExplicit
		cover {
			...PictureLarge
		}
		contributors {
			edges {
				roles
				node {
					... on Artist {
						id
						name
					}
				}
			}
		}
		tracksCount
	}
	${A}
`,V=i.J1`
	fragment SearchChannel on Channel {
		id
		picture {
			...PictureLarge
		}
		logoAsset {
			id
			large: urls(uiAssetRequest: {width: 500, height: 0})
		}
		name
		slug
		backgroundColor
	}
	${A}
`,X=i.J1`
	fragment SearchFlowConfig on FlowConfig {
		id
		title
		visuals {
			dynamicPageIcon {
				id
				large: urls(uiAssetRequest: {width: 500, height: 500})
			}
		}
	}
`,K=i.J1`
	fragment SearchLivestream on Livestream {
		id
		name
		cover {
			...PictureLarge
		}
	}
	${A}
`,Y=i.J1`
	fragment SearchPlaylist on Playlist {
		id
		title
		isFavorite
		estimatedTracksCount
		fansCount
		picture {
			...PictureLarge
		}
		owner {
			id
			name
		}
	}
	${A}
`,j=i.J1`
	fragment SearchPodcast on Podcast {
		id
		displayTitle
		isPodcastFavorite: isFavorite
		cover {
			...PictureLarge
		}
		isExplicit
		rawEpisodes
	}
	${A}
`,Z=i.J1`
	fragment SearchPodcastEpisode on PodcastEpisode {
		id
		title
		description
		duration
		releaseDate
		media {
			url
		}
		podcast {
			id
			displayTitle
			isExplicit
			cover {
				...PictureSmall
				...PictureLarge
			}
			rights {
				ads {
					available
				}
				sub {
					available
				}
			}
		}
	}
	${p}
	${A}
`,Q=i.J1`
	fragment SearchUser on User {
		id
		name
		picture {
			...PictureLarge
		}
	}
	${A}
`,tt=i.J1`
	fragment TrackLyrics on Track {
		id
		lyrics {
			id
			copyright
			synchronizedLines {
				line
			}
			text
			writers
		}
	}
`,rt=i.J1`
	fragment TrackContributors on Track {
		contributors {
			edges {
				cursor
				roles
				node {
					... on Artist {
						id
						name
						picture {
							...PictureSmall
							...PictureMedium
							...PictureLarge
						}
					}
				}
			}
		}
	}
	${p}
	${T}
	${A}
`,et=i.J1`
	fragment TrackBase on Track {
		id
		title
		...TrackContributors
		album {
			id
			displayTitle
			cover {
				...PictureSmall
				...PictureMedium
				...PictureLarge
			}
		}
	}
	${rt}
	${p}
	${T}
	${A}
`,it=i.J1`
	fragment TrackMasthead on Track {
		...TrackBase
		duration
		isExplicit
	}
	${et}
`,st=i.J1`
	fragment TrackRelatedAlbums on Track {
		relatedTracks(first: $relatedAlbumsFirst) {
			edges {
				node {
					...TrackBase
					album {
						...AlbumBase
						id
						contributors(first: $relatedAlbumsContributorsFirst) {
							edges {
								node {
									... on Artist {
										id
										name
									}
								}
							}
						}
						releaseDate
					}
				}
			}
		}
	}
	${et}
	${N}
`,nt=i.J1`
	fragment LyricsSynchronizedLines on LyricsSynchronizedLine {
		lrcTimestamp
		line
		lineTranslated
		milliseconds
		duration
	}
`,at=i.J1`
	fragment Lyrics on Lyrics {
		id
		copyright
		text
		writers
		synchronizedLines {
			...LyricsSynchronizedLines
		}
	}
	${nt}
`,ot=i.J1`
	fragment SynchronizedTrackLyrics on Track {
		id
		lyrics {
			...Lyrics
		}
		album {
			cover {
				...PictureSmall
				...PictureMedium
				...PictureLarge
			}
		}
	}
	${at}
	${p}
	${T}
	${A}
`,ct=i.J1`
	fragment TableTrack on Track {
		id
		title
		duration
		popularity
		isExplicit
		lyrics {
			id
		}
		media {
			id
			rights {
				ads {
					available
					availableAfter
				}
				sub {
					available
					availableAfter
				}
			}
		}
		album {
			id
			displayTitle
			cover {
				...PictureXSmall
				...PictureLarge
			}
		}
		contributors {
			edges {
				node {
					... on Artist {
						id
						name
					}
				}
			}
		}
	}
	${g}
	${A}
`,ut=i.J1`
	query SimpleStory($storyId: String!) {
		me {
			simpleStory(storyId: $storyId) {
				storyId
				placeholders {
					key
					value
				}
			}
		}
	}
`;function dt(t){const r={...s,...t};return i.IT(ut,r)}const lt=i.J1`
	query SearchResult($city: String!) {
		search(query: $city) {
			results {
				cities {
					edges {
						node {
							name
							countryCode
							coordinates {
								latitude
								longitude
							}
						}
					}
				}
			}
		}
	}
`;function $t(t){const r={...s,...t};return i._l(lt,r)}const It=i.J1`
	mutation SubscribeToLiveEventNotification($eventId: String!) {
		subscribeToLiveEventNotification(liveEventId: $eventId) {
			status
			liveEvent {
				id
				hasSubscribedToNotification
			}
		}
	}
`;function mt(t){const r={...s,...t};return i.n_(It,r)}const yt=i.J1`
	mutation UnsubscribeToLiveEventNotification($eventId: String!) {
		unsubscribeToLiveEventNotification(liveEventId: $eventId) {
			status
			liveEvent {
				id
				hasSubscribedToNotification
			}
		}
	}
`;function ft(t){const r={...s,...t};return i.n_(yt,r)}const gt=i.J1`
	query LiveEventCard(
		$eventId: String!
		$imageHeight: Int!
		$imageWidth: Int!
	) {
		liveEvent(liveEventId: $eventId) {
			id
			name
			startDate
			status
			live {
				id
				externalUrl {
					url
				}
			}
			videos(types: [TRAILER]) {
				edges {
					node {
						id
						externalUrl {
							url
						}
						type
					}
				}
			}
			assets {
				eventCardImageWeb {
					id
					urls(pictureRequest: {height: $imageHeight, width: $imageWidth})
				}
			}
			hasSubscribedToNotification
		}
	}
`;function St(t){const r={...s,...t};return i.IT(gt,r)}const pt=i.J1`
	query ArtistsPickerOnboardingStepInfo($context: OnboardingContextInput) {
		onboardingSteps(context: $context) {
			artistsPicker {
				minimumArtistsToPick
				maximumArtistsToPick
				displayGenreBar
			}
		}
	}
`;function Tt(t){const r={...s,...t};return i.IT(pt,r)}const At=i.J1`
	mutation ValidateOnboardingArtistsPickerStep(
		$artistIds: [String!]!
		$context: OnboardingContextInput!
	) {
		validateOnboardingArtistsPickerStep(
			input: {artistIds: $artistIds}
			context: $context
		) {
			status
			onboarding {
				currentStep
				shouldBeOnboarded
			}
		}
	}
`;function vt(t){const r={...s,...t};return i.n_(At,r)}const Pt=i.J1`
	query ImportLibraryOnboardingStepInfo {
		onboardingSteps {
			importLibrary {
				title
				skipCTA
				importer
				supportedServices
			}
		}
	}
`;function ht(t){const r={...s,...t};return i.IT(Pt,r)}const bt=i.J1`
	mutation ValidateOnboardingLibraryImportStep(
		$hasSkipped: Boolean!
		$context: OnboardingContextInput!
	) {
		validateOnboardingImportLibraryStep(
			input: {hasSkipped: $hasSkipped}
			context: $context
		) {
			status
			onboarding {
				currentStep
				shouldBeOnboarded
			}
		}
	}
`;function Ct(t){const r={...s,...t};return i.n_(bt,r)}const Et=i.J1`
	query PlaylistAssistantRecommendedTracks($playlistId: String!) {
		playlist(playlistId: $playlistId) {
			id
			playlistAssistant {
				sources {
					id
					title
					tracks {
						...PlaylistAssistantTrack
					}
				}
			}
		}
	}
	${S}
`;function kt(t){const r={...s,...t};return i.IT(Et,r)}const Lt=i.J1`
	query SearchTracks($value: String!, $first: Int!) {
		search(query: $value) {
			results {
				tracks(first: $first) {
					edges {
						node {
							...PlaylistAssistantTrack
						}
					}
				}
			}
		}
	}
	${S}
`;function Ft(t){const r={...s,...t};return i.IT(Lt,r)}const Jt=i.J1`
	mutation ReportIssueOfCatalog($input: CatalogIssueInput!) {
		reportCatalogIssue(input: $input) {
			... on ReportCatalogIssueMutationOutput {
				success
			}
		}
	}
`;function Rt(t){const r={...s,...t};return i.n_(Jt,r)}const qt=i.J1`
	mutation CreatePlaylist($input: PlaylistCreateMutationInput!) {
		createPlaylist(input: $input) {
			playlist {
				...PlaylistInfo
			}
		}
	}
	${P}
`;function Nt(t){const r={...s,...t};return i.n_(qt,r)}const Ot=i.J1`
	mutation UpdatePlaylist($input: PlaylistUpdateMutationInput!) {
		updatePlaylist(input: $input) {
			playlist {
				...PlaylistInfo
			}
		}
	}
	${P}
`;function xt(t){const r={...s,...t};return i.n_(Ot,r)}const _t=i.J1`
	query PlaylistAssistant($playlistId: String!) {
		playlist(playlistId: $playlistId) {
			...PlaylistInfo
		}
	}
	${P}
`;function Bt(t){const r={...s,...t};return i.IT(_t,r)}function Dt(t){const r={...s,...t};return i._l(_t,r)}const Mt=i.J1`
	query GetLyrics($trackId: String!) {
		track(trackId: $trackId) {
			id
			lyrics {
				id
				text
				...SynchronizedWordByWordLines
				...SynchronizedLines
				copyright
				writers
			}
		}
	}
	${b}
	${h}
`;function Ut(t){const r={...s,...t};return i.IT(Mt,r)}i.J1`
	query SynchronizedLyricsLines($trackId: String!) {
		track(trackId: $trackId) {
			id
			lyrics {
				id
				...SynchronizedLines
			}
		}
	}
	${h}
`,i.J1`
	query SynchronizedLyricsWordByWord($trackId: String!) {
		track(trackId: $trackId) {
			id
			lyrics {
				id
				...SynchronizedWordByWordLines
			}
		}
	}
	${b}
`;const wt=i.J1`
	query TrackCover($trackId: String!) {
		track(trackId: $trackId) {
			id
			album {
				id
				cover {
					...PictureLarge
				}
			}
		}
	}
	${A}
`;function Ht(t){const r={...s,...t};return i.IT(wt,r)}i.J1`
	query UnsynchronizedLyricsLines($trackId: String!) {
		track(trackId: $trackId) {
			id
			lyrics {
				id
				text
			}
		}
	}
`;const Gt=i.J1`
	query Tuner {
		me {
			id
			flowTuner {
				discoveryTuner
			}
		}
	}
`;function Wt(t){const r={...s,...t};return i.UX(Gt,r)}const zt=i.J1`
	mutation AddTracksToPlaylist($input: PlaylistAddTracksMutationInput!) {
		addTracksToPlaylist(input: $input) {
			... on PlaylistAddTracksOutput {
				addedTrackIds
				duplicatedTrackIds
			}
		}
	}
`;function Vt(t){const r={...s,...t};return i.n_(zt,r)}i.J1`
	query SidebarInfo($first: Int!) {
		me {
			userFavorites {
				estimatedTracksCount
				estimatedAlbumsCount
				albums(first: $first) {
					edges {
						node {
							id
							displayTitle
							cover {
								...PictureMedium
							}
						}
					}
				}
				estimatedArtistsCount
				artists(first: $first) {
					edges {
						node {
							id
							name
							picture {
								...PictureMedium
							}
						}
					}
				}
				estimatedPodcastsCount
				podcasts(first: $first) {
					edges {
						node {
							id
							displayTitle
							cover {
								...PictureMedium
							}
						}
					}
				}
			}
		}
	}
	${T}
`;const Xt=i.J1`
	query SidebarPlaylistsInfo($first: Int!) {
		me {
			id
			playlists(sort: {by: LAST_MODIFICATION_DATE, order: DESC}) {
				edges {
					node {
						lastModificationDate
						...SidebarPlaylistsInfo
					}
				}
			}
			userFavorites {
				playlists(first: $first) {
					edges {
						favoritedAt
						node {
							...SidebarPlaylistsInfo
						}
					}
				}
			}
		}
	}
	${C}
`;function Kt(t){const r={...s,...t};return i.IT(Xt,r)}const Yt=i.J1`
	query IsPlaylistBlindtestable($playlistId: String!) {
		playlist(playlistId: $playlistId) {
			id
			isBlindTestable
		}
	}
`;function jt(t){const r={...s,...t};return i.IT(Yt,r)}function Zt(t){const r={...s,...t};return i.UX(Yt,r)}const Qt=i.J1`
	mutation ClearSearchHistory {
		clearSearchSuccessResult {
			status
		}
	}
`;function tr(t){const r={...s,...t};return i.n_(Qt,r)}const rr=i.J1`
	query History($first: Int, $cursor: String) {
		me {
			id
			searchHistory {
				successResults(first: $first, after: $cursor) {
					pageInfo {
						hasNextPage
						endCursor
					}
					edges {
						node {
							... on Track {
								...TrackSearchHistory
							}
							... on PodcastEpisode {
								...EpisodeSearchHistory
							}
							... on Livestream {
								...LiveStreamSearchHistory
							}
							... on Artist {
								...ArtistSearchHistory
							}
							... on Playlist {
								...PlaylistSearchHistory
							}
							... on Album {
								...AlbumSearchHistory
							}
							... on Podcast {
								...PodcastSearchHistory
							}
						}
					}
				}
			}
		}
	}
	${q}
	${L}
	${F}
	${k}
	${J}
	${E}
	${R}
`;function er(t){const r={...s,...t};return i.IT(rr,r)}function ir(t){const r={...s,...t};return i._l(rr,r)}const sr=i.J1`
	query AlbumFull($albumId: String!) {
		album(albumId: $albumId) {
			...AlbumMasthead
		}
	}
	${x}
`;function nr(t){const r={...s,...t};return i.IT(sr,r)}const ar=i.J1`
	query AlternativeAlbumVersions($albumId: String!) {
		album(albumId: $albumId) {
			alternativeVersions {
				edges {
					node {
						...AlbumBase
						...AlbumContributors
					}
				}
			}
		}
	}
	${N}
	${O}
`;function or(t){const r={...s,...t};return i.IT(ar,r)}const cr=i.J1`
	query ArtistBiography($artistId: String!) {
		artist(artistId: $artistId) {
			id
			name
			...ArtistBio
		}
	}
	${U}
`;function ur(t){const r={...s,...t};return i.IT(cr,r)}const dr=i.J1`
	query ArtistCuratedPlaylists(
		$artistId: String!
		$curatedPlaylistFirst: Int!
	) {
		artist(artistId: $artistId) {
			id
			playlists {
				curatedPlaylists(first: $curatedPlaylistFirst) {
					edges {
						node {
							...PlaylistBase
							fansCount
							owner {
								id
								name
							}
							estimatedTracksCount
							isPrivate
							isCollaborative
						}
					}
				}
			}
		}
	}
	${v}
`;function lr(t){const r={...s,...t};return i.IT(dr,r)}const $r=i.J1`
	query ArtistDiscographyByType(
		$artistId: String!
		$nb: Int!
		$roles: [ContributorRoles!]!
		$types: [AlbumTypeInput!]!
		$subType: AlbumSubTypeInput
		$mode: DiscographyMode
		$cursor: String
		$order: AlbumOrder
	) {
		artist(artistId: $artistId) {
			id
			albums(
				after: $cursor
				first: $nb
				onlyCanonical: true
				roles: $roles
				types: $types
				subType: $subType
				mode: $mode
				order: $order
			) {
				edges {
					cursor
					node {
						...AlbumBase
						...AlbumContributors
					}
				}
				pageInfo {
					hasNextPage
					hasPreviousPage
					startCursor
					endCursor
				}
			}
		}
	}
	${N}
	${O}
`;function Ir(t){const r={...s,...t};return i.IT($r,r)}function mr(t){const r={...s,...t};return i.UX($r,r)}const yr=i.J1`
	query ArtistFull(
		$artistId: String!
		$relatedArtistFirst: Int!
		$liveEventsFirst: Int!
	) {
		artist(artistId: $artistId) {
			...ArtistMasthead
			relatedArtists: relatedArtist(first: $relatedArtistFirst) {
				edges {
					cursor
					node {
						...ArtistBase
					}
				}
				pageInfo {
					hasNextPage
					hasPreviousPage
					startCursor
					endCursor
				}
			}
			liveEvents(
				first: $liveEventsFirst
				types: [CONCERT, FESTIVAL]
				statuses: [PENDING]
			) {
				edges {
					node {
						id
					}
				}
				pageInfo {
					endCursor
					hasNextPage
				}
			}
		}
		me {
			userFavorites {
				byArtist(artistId: $artistId) {
					estimatedTracksCount
				}
			}
		}
	}
	${H}
	${M}
`;function fr(t){const r={...s,...t};return i.IT(yr,r)}const gr=i.J1`
	query ArtistRelatedArtists(
		$artistId: String!
		$relatedArtistFirst: Int!
		$cursor: String
	) {
		artist(artistId: $artistId) {
			id
			relatedArtists: relatedArtist(
				first: $relatedArtistFirst
				after: $cursor
			) {
				edges {
					cursor
					node {
						...ArtistBase
					}
				}
				pageInfo {
					hasNextPage
					hasPreviousPage
					startCursor
					endCursor
				}
			}
		}
	}
	${M}
`;function Sr(t){const r={...s,...t};return i.IT(gr,r)}const pr=i.J1`
	query ArtistRelatedPlaylists(
		$artistId: String!
		$relatedPlaylistFirst: Int!
		$cursor: String
	) {
		artist(artistId: $artistId) {
			id
			playlists {
				relatedPlaylists(first: $relatedPlaylistFirst, after: $cursor) {
					edges {
						cursor
						node {
							...PlaylistBase
							fansCount
							owner {
								id
								name
							}
							estimatedTracksCount
							isPrivate
							isCollaborative
						}
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		}
	}
	${v}
`;function Tr(t){const r={...s,...t};return i.IT(pr,r)}i.J1`
	query ConcertList($artistId: String!, $perPage: Int = 70) {
		artist(artistId: $artistId) {
			id
			concerts(first: $perPage) {
				edges {
					node {
						id
						name
						date
						location
					}
				}
			}
		}
	}
`,i.J1`
	query LastConcert($artistId: String!) {
		artist(artistId: $artistId) {
			id
			name
			...ArtistConcert
		}
	}
	${_}
`;const Ar=i.J1`
	query LastLiveEvent(
		$artistId: String!
		$liveEventsByProximityFirst: Int = 1
	) {
		artist(artistId: $artistId) {
			id
			name
			...ArtistLiveEventsByProximity
		}
	}
	${D}
`;function vr(t){const r={...s,...t};return i.IT(Ar,r)}const Pr=i.J1`
	query LiveEventList($artistId: String!, $liveEventsFirst: Int!) {
		artist(artistId: $artistId) {
			id
			name
			...ArtistLiveEvents
		}
	}
	${B}
`;function hr(t){const r={...s,...t};return i.IT(Pr,r)}const br=i.J1`
	query PersonalFavoriteByArtist(
		$artistId: String!
		$first: Int!
		$cursor: String
	) {
		me {
			userFavorites {
				byArtist(artistId: $artistId) {
					tracks(after: $cursor, first: $first) {
						edges {
							cursor
							favoritedAt
							node {
								...TableTrack
							}
						}
						pageInfo {
							hasNextPage
							endCursor
						}
					}
				}
			}
		}
	}
	${ct}
`;function Cr(t){const r={...s,...t};return i.IT(br,r)}const Er=i.J1`
	query PersonalFavoriteCount($artistId: String!) {
		artist(artistId: $artistId) {
			picture {
				...PictureSmall
			}
		}
		me {
			userFavorites {
				byArtist(artistId: $artistId) {
					estimatedTracksCount
				}
			}
		}
	}
	${p}
`;function kr(t){const r={...s,...t};return i.IT(Er,r)}const Lr=i.J1`
	query LiveEvent(
		$eventId: String!
		$contributorsFirst: Int = 12
		$albumFirst: Int = 12
	) {
		liveEvent(liveEventId: $eventId) {
			id
			name
			startDate
			status
			venue
			cityName
			hasSubscribedToNotification
			sources {
				coBranding {
					logoAsset {
						lightThemeUIAsset {
							id
							urls(uiAssetRequest: {width: 730, height: 182})
						}
						darkThemeUIAsset {
							id
							urls(uiAssetRequest: {width: 730, height: 182})
						}
					}
				}
				defaultUrl
			}
			live {
				id
				externalUrl {
					url
				}
			}
			types {
				isConcert
				isFestival
				isLivestreamConcert
				isLivestreamFestival
			}
			videos(types: [TRAILER]) {
				edges {
					node {
						id
						externalUrl {
							url
						}
						type
					}
				}
			}
			contributors(first: $contributorsFirst) {
				edges {
					concertContributorMetadata {
						roles {
							isMain
							isSupport
						}
						performanceOrder
					}
					cursor
					node {
						... on Artist {
							id
							name
							isFavorite
							fansCount
							albums(
								types: [ALBUM]
								order: RELEASE_DATE
								mode: OFFICIAL
								roles: [MAIN]
								first: $albumFirst
								after: null
							) {
								edges {
									cursor
									node {
										id
										displayTitle
										releaseDate
										cover {
											md5
											...PictureSmall
											...PictureMedium
											...PictureLarge
										}
									}
								}
							}
							picture {
								md5
								...PictureSmall
								...PictureMedium
								...PictureLarge
							}
							url {
								webUrl
								deepLink
							}
							isFavorite
							fansCount
						}
					}
				}
				pageInfo {
					hasNextPage
					startCursor
					hasPreviousPage
				}
			}
		}
	}
	${p}
	${T}
	${A}
`;function Fr(t){const r={...s,...t};return i.IT(Lr,r)}const Jr=i.J1`
	query LiveEventsRecommended(
		$longitude: Float = null
		$latitude: Float = null
		$first: Int
		$after: String
	) {
		liveEventsRecommended(
			longitude: $longitude
			latitude: $latitude
			first: $first
			after: $after
		) {
			pageInfo {
				endCursor
				hasNextPage
			}
			edges {
				cursor
				node {
					id
					types {
						isConcert
						isFestival
						isLivestreamConcert
						isLivestreamFestival
					}
					startDate
					status
					venue
					hasSubscribedToNotification
					name
					sources {
						songkick {
							id
						}
					}
					contributors(first: 10, after: null) {
						edges {
							cursor
							node {
								... on Artist {
									id
									name
									fansCount
									isFavorite
									picture {
										...PictureSmall
										...PictureMedium
										...PictureLarge
									}
									url {
										webUrl
										deepLink
									}
								}
							}
							concertContributorMetadata {
								roles {
									isMain
								}
							}
						}
						pageInfo {
							hasNextPage
							startCursor
							hasPreviousPage
							endCursor
						}
					}
				}
			}
		}
	}
	${p}
	${T}
	${A}
`;function Rr(t){const r={...s,...t};return i.IT(Jr,r)}const qr=i.J1`
	query ArtistExclusionsTab($artistFirst: Int, $artistCursor: String) {
		me {
			id
			bannedFromRecommendation {
				artists(first: $artistFirst, after: $artistCursor) {
					pageInfo {
						hasNextPage
						endCursor
					}
					edges {
						node {
							...ArtistBase
							isBannedFromRecommendation
						}
					}
				}
				estimatedArtistsCount
			}
		}
	}
	${M}
`;function Nr(t){const r={...s,...t};return i.IT(qr,r)}const Or=i.J1`
	query TrackExclusionsTab($trackFirst: Int, $trackCursor: String) {
		me {
			id
			bannedFromRecommendation {
				tracks(first: $trackFirst, after: $trackCursor) {
					pageInfo {
						hasNextPage
						endCursor
					}
					edges {
						node {
							...TableTrack
							isBannedFromRecommendation
						}
						bannedAt
					}
				}
				estimatedTracksCount
			}
		}
	}
	${ct}
`;function xr(t){const r={...s,...t};return i.IT(Or,r)}const _r=i.J1`
	query OthersFavorite($userId: String!) {
		user(userId: $userId) {
			id
			favorites {
				estimatedTracksCount
			}
		}
	}
`;function Br(t){const r={...s,...t};return i.UX(_r,r)}const Dr=i.J1`
	query PlaylistCover($playlistId: String!) {
		playlist(playlistId: $playlistId) {
			...PlaylistBase
			isPrivate
			isFromFavoriteTracks
		}
	}
	${v}
`;function Mr(t){const r={...s,...t};return i.IT(Dr,r)}const Ur=i.J1`
	mutation AddAlbumInSearchHistory($albumId: String!) {
		addAlbumInSearchSuccessResult(albumId: $albumId) {
			status
		}
	}
`;function wr(t){const r={...s,...t};return i.n_(Ur,r)}const Hr=i.J1`
	mutation AddArtistInSearchHistory($artistId: String!) {
		addArtistInSearchSuccessResult(artistId: $artistId) {
			status
		}
	}
`;function Gr(t){const r={...s,...t};return i.n_(Hr,r)}const Wr=i.J1`
	mutation AddTrackInSearchHistory($trackId: String!) {
		addTrackInSearchSuccessResult(trackId: $trackId) {
			status
		}
	}
`;function zr(t){const r={...s,...t};return i.n_(Wr,r)}const Vr=i.J1`
	mutation AddPlaylistInSearchHistory($playlistId: String!) {
		addPlaylistInSearchSuccessResult(playlistId: $playlistId) {
			status
		}
	}
`;function Xr(t){const r={...s,...t};return i.n_(Vr,r)}const Kr=i.J1`
	mutation AddPodcastInSearchHistory($podcastId: String!) {
		addPodcastInSearchSuccessResult(podcastId: $podcastId) {
			status
		}
	}
`;function Yr(t){const r={...s,...t};return i.n_(Kr,r)}const jr=i.J1`
	mutation AddPodcastEpisodeInSearchHistory($episodeId: String!) {
		addPodcastEpisodeInSearchSuccessResult(episodeId: $episodeId) {
			status
		}
	}
`;function Zr(t){const r={...s,...t};return i.n_(jr,r)}const Qr=i.J1`
	mutation AddLivestreamInSearchHistory($livestreamId: String!) {
		addLivestreamInSearchSuccessResult(livestreamId: $livestreamId) {
			status
		}
	}
`;function te(t){const r={...s,...t};return i.n_(Qr,r)}const re=i.J1`
	query SearchAlbumsTab($query: String!, $first: Int, $cursor: String) {
		instantSearch(query: $query) {
			results {
				albums(first: $first, after: $cursor) {
					edges {
						node {
							...SearchAlbum
						}
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		}
	}
	${z}
`;function ee(t){const r={...s,...t};return i.IT(re,r)}const ie=i.J1`
	query SearchArtistsTab($query: String!, $first: Int, $cursor: String) {
		instantSearch(query: $query) {
			results {
				artists(first: $first, after: $cursor) {
					edges {
						node {
							...SearchArtist
						}
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		}
	}
	${G}
`;function se(t){const r={...s,...t};return i.IT(ie,r)}const ne=i.J1`
	query SearchChannelsTab($query: String!, $first: Int, $cursor: String) {
		instantSearch(query: $query) {
			results {
				channels(first: $first, after: $cursor) {
					edges {
						node {
							...SearchChannel
						}
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		}
	}
	${V}
`;function ae(t){const r={...s,...t};return i.IT(ne,r)}const oe=i.J1`
	query SearchEpisodesTab($query: String!, $first: Int, $cursor: String) {
		instantSearch(query: $query) {
			results {
				podcastEpisodes(first: $first, after: $cursor) {
					edges {
						node {
							...SearchPodcastEpisode
						}
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		}
	}
	${Z}
`;function ce(t){const r={...s,...t};return i.IT(oe,r)}const ue=i.J1`
	query SearchFlowConfigsTab($query: String!, $first: Int, $cursor: String) {
		instantSearch(query: $query) {
			results {
				flowConfigs(first: $first, after: $cursor) {
					edges {
						node {
							...SearchFlowConfig
						}
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		}
	}
	${X}
`;function de(t){const r={...s,...t};return i.IT(ue,r)}const le=i.J1`
	query SearchFull($query: String!, $firstGrid: Int!, $firstList: Int!) {
		instantSearch(query: $query) {
			bestResult {
				__typename
				... on InstantSearchAlbumBestResult {
					album {
						...SearchAlbum
					}
				}
				... on InstantSearchArtistBestResult {
					artist {
						...BestResultArtist
					}
				}
				... on InstantSearchPlaylistBestResult {
					playlist {
						...SearchPlaylist
					}
				}
				... on InstantSearchPodcastBestResult {
					podcast {
						...SearchPodcast
					}
				}
				... on InstantSearchLivestreamBestResult {
					livestream {
						...SearchLivestream
					}
				}
				... on InstantSearchTrackBestResult {
					track {
						...TableTrack
					}
				}
				... on InstantSearchPodcastEpisodeBestResult {
					podcastEpisode {
						...SearchPodcastEpisode
					}
				}
			}
			results {
				artists(first: $firstGrid) {
					edges {
						node {
							...SearchArtist
						}
					}
					pageInfo {
						endCursor
					}
					priority
				}
				albums(first: $firstGrid) {
					edges {
						node {
							...SearchAlbum
						}
					}
					pageInfo {
						endCursor
					}
					priority
				}
				channels(first: $firstGrid) {
					edges {
						node {
							...SearchChannel
						}
					}
					pageInfo {
						endCursor
					}
					priority
				}
				flowConfigs(first: $firstGrid) {
					edges {
						node {
							...SearchFlowConfig
						}
					}
					pageInfo {
						endCursor
					}
					priority
				}
				livestreams(first: $firstGrid) {
					edges {
						node {
							...SearchLivestream
						}
					}
					pageInfo {
						endCursor
					}
					priority
				}
				playlists(first: $firstGrid) {
					edges {
						node {
							...SearchPlaylist
						}
					}
					pageInfo {
						endCursor
					}
					priority
				}
				podcasts(first: $firstGrid) {
					edges {
						node {
							...SearchPodcast
						}
					}
					pageInfo {
						endCursor
					}
					priority
				}
				tracks(first: $firstList) {
					edges {
						node {
							...TableTrack
						}
					}
					pageInfo {
						endCursor
					}
					priority
				}
				users(first: $firstGrid) {
					edges {
						node {
							...SearchUser
						}
					}
					pageInfo {
						endCursor
					}
					priority
				}
				podcastEpisodes(first: $firstList) {
					edges {
						node {
							...SearchPodcastEpisode
						}
					}
					pageInfo {
						endCursor
					}
					priority
				}
			}
		}
	}
	${z}
	${W}
	${Y}
	${j}
	${K}
	${ct}
	${Z}
	${G}
	${V}
	${X}
	${Q}
`;function $e(t){const r={...s,...t};return i.IT(le,r)}const Ie=i.J1`
	query SearchLivestreamsTab($query: String!, $first: Int, $cursor: String) {
		instantSearch(query: $query) {
			results {
				livestreams(first: $first, after: $cursor) {
					edges {
						node {
							...SearchLivestream
						}
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		}
	}
	${K}
`;function me(t){const r={...s,...t};return i.IT(Ie,r)}const ye=i.J1`
	query SearchPlaylistsTab($query: String!, $first: Int, $cursor: String) {
		instantSearch(query: $query) {
			results {
				playlists(first: $first, after: $cursor) {
					edges {
						node {
							...SearchPlaylist
						}
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		}
	}
	${Y}
`;function fe(t){const r={...s,...t};return i.IT(ye,r)}const ge=i.J1`
	query SearchPodcastsTab($query: String!, $first: Int, $cursor: String) {
		instantSearch(query: $query) {
			results {
				podcasts(first: $first, after: $cursor) {
					edges {
						node {
							...SearchPodcast
						}
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		}
	}
	${j}
`;function Se(t){const r={...s,...t};return i.IT(ge,r)}i.J1`
	query SearchTopResult($query: String!) {
		instantSearch(query: $query) {
			topResult {
				content {
					...SearchAlbum
					...SearchArtist
					...SearchPlaylist
					...SearchPodcast
					...SearchLivestream
				}
			}
		}
	}
	${z}
	${G}
	${Y}
	${j}
	${K}
`;const pe=i.J1`
	query SearchTracksTab($query: String!, $first: Int, $cursor: String) {
		instantSearch(query: $query) {
			results {
				tracks(first: $first, after: $cursor) {
					edges {
						node {
							...TableTrack
						}
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		}
	}
	${ct}
`;function Te(t){const r={...s,...t};return i.IT(pe,r)}const Ae=i.J1`
	query SearchUsersTab($query: String!, $first: Int, $cursor: String) {
		instantSearch(query: $query) {
			results {
				users(first: $first, after: $cursor) {
					edges {
						node {
							...SearchUser
						}
					}
					pageInfo {
						hasNextPage
						endCursor
					}
				}
			}
		}
	}
	${Q}
`;function ve(t){const r={...s,...t};return i.IT(Ae,r)}i.J1`
	query SynchronizedTrackLyrics($trackId: String!) {
		track(trackId: $trackId) {
			...SynchronizedTrackLyrics
		}
	}
	${ot}
`;const Pe=i.J1`
	query TrackFull(
		$trackId: String!
		$relatedAlbumsFirst: Int
		$relatedAlbumsContributorsFirst: Int
	) {
		track(trackId: $trackId) {
			...TrackMasthead
			...TrackLyrics
			...TrackRelatedAlbums
		}
	}
	${it}
	${tt}
	${st}
`;function he(t){const r={...s,...t};return i.IT(Pe,r)}const be=i.J1`
	query TrackLyrics($trackId: String!) {
		track(trackId: $trackId) {
			...TrackLyrics
		}
	}
	${tt}
`;function Ce(t){const r={...s,...t};return i.IT(be,r)}const Ee=i.J1`
	query TrackRelatedAlbums(
		$trackId: String!
		$relatedAlbumsFirst: Int
		$relatedAlbumsContributorsFirst: Int
	) {
		track(trackId: $trackId) {
			...TrackRelatedAlbums
		}
	}
	${st}
`;function ke(t){const r={...s,...t};return i.IT(Ee,r)}const Le=i.J1`
	mutation AddAlbumToFavorite($albumId: String!) {
		addAlbumToFavorite(albumId: $albumId) {
			album {
				id
				isFavorite
			}
		}
	}
`;function Fe(t){const r={...s,...t};return i.n_(Le,r)}const Je=i.J1`
	mutation AddArtistFavorite($artistId: String!) {
		addArtistToFavorite(artistId: $artistId) {
			favoritedAt
			artist {
				id
				isFavorite
			}
		}
	}
`;function Re(t){const r={...s,...t};return i.n_(Je,r)}const qe=i.J1`
	mutation AddPlaylistToFavorite($playlistId: String!) {
		addPlaylistToFavorite(playlistId: $playlistId) {
			playlist {
				id
				isFavorite
			}
		}
	}
`;function Ne(t){const r={...s,...t};return i.n_(qe,r)}const Oe=i.J1`
	mutation AddPodcastToFavorite($podcastId: String!) {
		addPodcastToFavorite(podcastId: $podcastId) {
			podcast {
				id
				isPodcastFavorite: isFavorite
			}
		}
	}
`;function xe(t){const r={...s,...t};return i.n_(Oe,r)}const _e=i.J1`
	mutation AddTrackToFavorite($trackId: String!) {
		addTrackToFavorite(trackId: $trackId) {
			track {
				id
				isFavorite
			}
		}
	}
`;function Be(t){const r={...s,...t};return i.n_(_e,r)}const De=i.J1`
	mutation RemoveAlbumFromFavorite($albumId: String!) {
		removeAlbumFromFavorite(albumId: $albumId) {
			album {
				id
				isFavorite
			}
		}
	}
`;function Me(t){const r={...s,...t};return i.n_(De,r)}const Ue=i.J1`
	mutation RemoveArtistFromFavorite($artistId: String!) {
		removeArtistFromFavorite(artistId: $artistId) {
			artist {
				id
				isFavorite
			}
		}
	}
`;function we(t){const r={...s,...t};return i.n_(Ue,r)}const He=i.J1`
	mutation RemovePlaylistFromFavorite($playlistId: String!) {
		removePlaylistFromFavorite(playlistId: $playlistId) {
			playlist {
				id
				isFavorite
			}
		}
	}
`;function Ge(t){const r={...s,...t};return i.n_(He,r)}const We=i.J1`
	mutation RemovePodcastFromFavorite($podcastId: String!) {
		removePodcastFromFavorite(podcastId: $podcastId) {
			podcast {
				id
				isPodcastFavorite: isFavorite
			}
		}
	}
`;function ze(t){const r={...s,...t};return i.n_(We,r)}const Ve=i.J1`
	mutation RemoveTrackFromFavorite($trackId: String!) {
		removeTrackFromFavorite(trackId: $trackId) {
			track {
				id
				isFavorite
			}
		}
	}
`;function Xe(t){const r={...s,...t};return i.n_(Ve,r)}const Ke=i.J1`
	mutation BanArtistFromRecommendation($artistId: String!) {
		banArtistFromRecommendation(artistId: $artistId) {
			artist {
				id
				isBannedFromRecommendation
			}
		}
	}
`;function Ye(t){const r={...s,...t};return i.n_(Ke,r)}const je=i.J1`
	mutation UnbanArtistFromRecommendation($artistId: String!) {
		unbanArtistFromRecommendation(artistId: $artistId) {
			artist {
				id
				isBannedFromRecommendation
			}
		}
	}
`;function Ze(t){const r={...s,...t};return i.n_(je,r)}const Qe=i.J1`
	mutation BanTrackFromRecommendation($trackId: String!) {
		banTrackFromRecommendation(trackId: $trackId) {
			track {
				id
				isBannedFromRecommendation
			}
		}
	}
`;function ti(t){const r={...s,...t};return i.n_(Qe,r)}const ri=i.J1`
	mutation UnbanTrackFromRecommendation($trackId: String!) {
		unbanTrackFromRecommendation(trackId: $trackId) {
			track {
				id
				isBannedFromRecommendation
			}
		}
	}
`;function ei(t){const r={...s,...t};return i.n_(ri,r)}const ii=i.J1`
	query Me {
		me {
			id
			onboarding {
				currentStep
				shouldBeOnboarded
			}
			user {
				id
			}
		}
	}
`;function si(t){const r={...s,...t};return i.IT(ii,r)}}}]);