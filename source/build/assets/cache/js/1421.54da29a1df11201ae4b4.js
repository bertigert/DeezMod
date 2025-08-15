"use strict";(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[1421],{A2sV:(t,e,r)=>{r.d(e,{$1e:()=>cr,$FS:()=>Ar,$IV:()=>se,AgB:()=>Ne,B1A:()=>$,BMS:()=>vt,BXP:()=>Kr,CwG:()=>Ie,D2L:()=>Ge,DCO:()=>Wt,DI4:()=>Pr,DNU:()=>qr,Dh1:()=>pr,DpH:()=>Ht,Dvu:()=>g,EG:()=>Yt,FJX:()=>mi,Ggf:()=>Ut,H91:()=>Br,Hi1:()=>ue,HwP:()=>Qr,I6U:()=>p,I7O:()=>ti,ICy:()=>Ci,IoY:()=>Cr,KDJ:()=>Je,KuJ:()=>A,LHG:()=>m,LLq:()=>pe,LQK:()=>zr,LrA:()=>c,M7C:()=>jr,Mij:()=>a,MmF:()=>Fr,N$N:()=>u,N6A:()=>Tt,O7r:()=>Rt,OD9:()=>ge,ONi:()=>bi,ORW:()=>Le,PKC:()=>ai,Q13:()=>vi,QNb:()=>rr,RsC:()=>dr,SNU:()=>$e,TF:()=>De,T_E:()=>Ce,U3y:()=>Vt,UJq:()=>re,V9d:()=>kt,VZ1:()=>pi,Vc2:()=>We,Wyk:()=>Ae,XBt:()=>ae,Y1z:()=>Qt,Ypw:()=>jt,ZO1:()=>St,_At:()=>Gr,a40:()=>ri,aZE:()=>Be,bVd:()=>je,by3:()=>l,ct1:()=>T,dj:()=>xt,efT:()=>Lr,epo:()=>me,fL0:()=>Nr,fSF:()=>Ke,fW1:()=>f,g1V:()=>le,gWG:()=>qe,hWf:()=>tr,iqi:()=>o,jky:()=>Qe,kqj:()=>te,kuS:()=>sr,l4E:()=>gr,mAL:()=>ye,mcr:()=>mr,nPg:()=>si,nZ$:()=>$r,oGM:()=>Ai,oih:()=>ht,ovp:()=>ar,p9C:()=>we,qAq:()=>ci,rb0:()=>I,rdE:()=>d,rqF:()=>S,sJs:()=>$i,sV3:()=>n,sfq:()=>Mt,t1v:()=>br,tjO:()=>Fe,u0N:()=>Et,v4u:()=>gi,vi:()=>y,vjx:()=>Ot,w8_:()=>Dr,we3:()=>di,weQ:()=>_t,wgW:()=>be,wi_:()=>Pe,x87:()=>ze,xxF:()=>ce,y02:()=>Jr,yJp:()=>wr,yRK:()=>Ee,zEs:()=>Pi});var i=r("Au7y");const s={};let n=function(t){return t.ALPHA="ALPHA",t.NONE="NONE",t.RANK="RANK",t.RELEASE_DATE="RELEASE_DATE",t}({}),a=function(t){return t.COMPILATION="COMPILATION",t.KARAOKE="KARAOKE",t.LIVE="LIVE",t.STUDIO="STUDIO",t}({}),o=function(t){return t.ALBUM="ALBUM",t.EP="EP",t.SINGLES="SINGLES",t.UNKNOWN="UNKNOWN",t}({}),c=function(t){return t.AUDIO="AUDIO",t.EXPLICIT_CONTENT="EXPLICIT_CONTENT",t.OTHER="OTHER",t.WRONG_ARTIST="WRONG_ARTIST",t}({}),u=function(t){return t.ARTIST_ALREADY_EXIST="ARTIST_ALREADY_EXIST",t.EXPLICIT_CONTENT="EXPLICIT_CONTENT",t.OTHER="OTHER",t.WRONG_PICTURE="WRONG_PICTURE",t}({}),d=function(t){return t.AUDIO="AUDIO",t.EXPLICIT_CONTENT="EXPLICIT_CONTENT",t.OTHER="OTHER",t.WRONG_ARTIST="WRONG_ARTIST",t}({}),l=function(t){return t.FEATURED="FEATURED",t.MAIN="MAIN",t}({}),m=function(t){return t.PICKED_FROM_FAVORITES_ALBUMS="PICKED_FROM_FAVORITES_ALBUMS",t.PICKED_FROM_FAVORITES_ARTISTS="PICKED_FROM_FAVORITES_ARTISTS",t.PICKED_FROM_FAVORITES_TRACKS="PICKED_FROM_FAVORITES_TRACKS",t.PICKED_FROM_USERS_CREATED_PLAYLIST="PICKED_FROM_USERS_CREATED_PLAYLIST",t.RECENTLY_STREAMED_ON_REPEAT="RECENTLY_STREAMED_ON_REPEAT",t.UNKNOWN="UNKNOWN",t}({}),I=function(t){return t.ALL="ALL",t.NON_OFFICIAL="NON_OFFICIAL",t.OFFICIAL="OFFICIAL",t}({}),$=function(t){return t.DEFAULT="DEFAULT",t.DISCOVERY="DISCOVERY",t}({}),y=function(t){return t.CANCELLED="CANCELLED",t.ENDED="ENDED",t.PENDING="PENDING",t.STARTED="STARTED",t}({}),g=function(t){return t.ARTISTS_PICKER="ARTISTS_PICKER",t.IMPROVE="IMPROVE",t.MUSIC_TOGETHER="MUSIC_TOGETHER",t.WELCOME="WELCOME",t}({}),f=function(t){return t.HOMEPAGE="HOMEPAGE",t}({}),p=function(t){return t.ALBUM="ALBUM",t.ARTIST="ARTIST",t.FLOW_CONFIG="FLOW_CONFIG",t.LIVESTREAM="LIVESTREAM",t.PLAYLIST="PLAYLIST",t.PODCAST="PODCAST",t.TRACK="TRACK",t}({}),S=function(t){return t.FALLBACK="FALLBACK",t}({}),A=function(t){return t.CONCERT_DATE="CONCERT_DATE",t.RECOMMENDED="RECOMMENDED",t}({}),T=function(t){return t.DEEZER_SESSION="DEEZER_SESSION",t.DOCUMENTARY="DOCUMENTARY",t.INTERVIEW="INTERVIEW",t.REPLAY="REPLAY",t.TRAILER="TRAILER",t}({});const P=i.J1`
	fragment PictureXSmall on Picture {
		id
		xxx_small: urls(pictureRequest: {width: 40, height: 40})
		explicitStatus
	}
`,v=i.J1`
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
	${P}
`,C=i.J1`
	fragment PictureSmall on Picture {
		id
		small: urls(pictureRequest: {height: 100, width: 100})
		explicitStatus
	}
`,h=i.J1`
	fragment PictureMedium on Picture {
		id
		medium: urls(pictureRequest: {width: 264, height: 264})
		explicitStatus
	}
`,b=i.J1`
	fragment PictureLarge on Picture {
		id
		large: urls(pictureRequest: {width: 500, height: 500})
		explicitStatus
	}
`,E=i.J1`
	fragment PlaylistBase on Playlist {
		id
		picture {
			...PictureSmall
			...PictureMedium
			...PictureLarge
		}
		title
	}
	${C}
	${h}
	${b}
`,L=i.J1`
	fragment PlaylistInfo on Playlist {
		...PlaylistBase
		description
		isPrivate
		isCollaborative
		defaultPicture {
			id
			...PictureSmall
			...PictureMedium
		}
	}
	${E}
	${C}
	${h}
`,k=i.J1`
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
`,F=i.J1`
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
`,R=i.J1`
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
	${C}
`,J=i.J1`
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
	${C}
`,O=i.J1`
	fragment ArtistSearchHistory on Artist {
		id
		name
		fansCount
		picture {
			...PictureSmall
		}
	}
	${C}
`,N=i.J1`
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
	${C}
`,_=i.J1`
	fragment LiveStreamSearchHistory on Livestream {
		id
		name
		isOnStream
		cover {
			...PictureSmall
		}
	}
	${C}
`,q=i.J1`
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
	${C}
`,x=i.J1`
	fragment PodcastSearchHistory on Podcast {
		id
		displayTitle
		description
		cover {
			...PictureSmall
		}
	}
	${C}
`,D=i.J1`
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
	${C}
`,M=i.J1`
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
	${C}
	${h}
	${b}
`,B=i.J1`
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
	${C}
	${h}
	${b}
`,U=i.J1`
	fragment AlbumMasthead on Album {
		...AlbumBase
		...AlbumContributors
		duration
		fansCount
		hasIdentifiedAIContent
	}
	${M}
	${B}
`,w=i.J1`
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
`,H=i.J1`
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
`,G=i.J1`
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
`,W=i.J1`
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
	${C}
	${h}
	${b}
`,K=i.J1`
	fragment ArtistBio on Artist {
		bio {
			full
		}
	}
`,V=i.J1`
	fragment ArtistSocial on Artist {
		social {
			twitter
			facebook
			website
		}
	}
`,z=i.J1`
	fragment ArtistMasthead on Artist {
		...ArtistBase
		...ArtistBio
		...ArtistSocial
		onTour
		status
	}
	${W}
	${K}
	${V}
`,Y=i.J1`
	fragment SearchArtist on Artist {
		id
		isFavorite
		name
		fansCount
		picture {
			...PictureLarge
		}
	}
	${b}
`,Q=i.J1`
	fragment BestResultArtist on Artist {
		...SearchArtist
		hasSmartRadio
		hasTopTracks
	}
	${Y}
`,X=i.J1`
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
	${b}
`,j=i.J1`
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
		url {
			webUrl
		}
		backgroundColor
	}
	${b}
`,Z=i.J1`
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
`,tt=i.J1`
	fragment SearchLivestream on Livestream {
		id
		name
		cover {
			...PictureLarge
		}
	}
	${b}
`,et=i.J1`
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
	${b}
`,rt=i.J1`
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
	${b}
`,it=i.J1`
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
	${C}
	${b}
`,st=i.J1`
	fragment SearchUser on User {
		id
		name
		picture {
			...PictureLarge
		}
	}
	${b}
`,nt=i.J1`
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
`,at=i.J1`
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
	${C}
	${h}
	${b}
`,ot=i.J1`
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
	${at}
	${C}
	${h}
	${b}
`,ct=i.J1`
	fragment TrackMasthead on Track {
		...TrackBase
		duration
		isExplicit
	}
	${ot}
`,ut=i.J1`
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
	${ot}
	${M}
`,dt=i.J1`
	fragment LyricsSynchronizedLines on LyricsSynchronizedLine {
		lrcTimestamp
		line
		lineTranslated
		milliseconds
		duration
	}
`,lt=i.J1`
	fragment Lyrics on Lyrics {
		id
		copyright
		text
		writers
		synchronizedLines {
			...LyricsSynchronizedLines
		}
	}
	${dt}
`,mt=i.J1`
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
	${lt}
	${C}
	${h}
	${b}
`,It=i.J1`
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
	${P}
	${b}
`,$t=i.J1`
	fragment PinDrawerAlbum on Album {
		id
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
		...AlbumBase
		__typename
	}
	${M}
`,yt=i.J1`
	fragment PinDrawerPlaylist on Playlist {
		id
		owner {
			id
			name
		}
		...PlaylistBase
		__typename
	}
	${E}
`,gt=i.J1`
	fragment PinDrawerTrack on Track {
		id
		title
		album {
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
		__typename
	}
	${C}
`,ft=i.J1`
	fragment PinItem on QuickAccessItem {
		... on Album {
			id
			...AlbumBase
		}
		... on Artist {
			id
			...ArtistBase
		}
		... on Playlist {
			id
			...PlaylistBase
		}
		... on Podcast {
			id
			displayTitle
			cover {
				...PictureSmall
			}
		}
		... on FlowConfig {
			id
			title
			visuals {
				dynamicPageIcon {
					id
					small: urls(uiAssetRequest: {height: 100, width: 100})
				}
			}
		}
		... on Livestream {
			id
			name
			cover {
				...PictureSmall
			}
		}
		... on Track {
			id
			title
			album {
				id
				cover {
					...PictureSmall
				}
			}
		}
	}
	${M}
	${W}
	${E}
	${C}
`,pt=i.J1`
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
`;function St(t){const e={...s,...t};return i.IT(pt,e)}const At=i.J1`
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
`;function Tt(t){const e={...s,...t};return i._l(At,e)}const Pt=i.J1`
	mutation SubscribeToLiveEventNotification($eventId: String!) {
		subscribeToLiveEventNotification(liveEventId: $eventId) {
			status
			liveEvent {
				id
				hasSubscribedToNotification
			}
		}
	}
`;function vt(t){const e={...s,...t};return i.n_(Pt,e)}const Ct=i.J1`
	mutation UnsubscribeToLiveEventNotification($eventId: String!) {
		unsubscribeToLiveEventNotification(liveEventId: $eventId) {
			status
			liveEvent {
				id
				hasSubscribedToNotification
			}
		}
	}
`;function ht(t){const e={...s,...t};return i.n_(Ct,e)}const bt=i.J1`
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
`;function Et(t){const e={...s,...t};return i.IT(bt,e)}const Lt=i.J1`
	query ArtistsPickerOnboardingStepInfo($context: OnboardingContextInput) {
		onboardingSteps(context: $context) {
			artistsPicker {
				minimumArtistsToPick
				maximumArtistsToPick
				displayGenreBar
			}
		}
	}
`;function kt(t){const e={...s,...t};return i.IT(Lt,e)}const Ft=i.J1`
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
`;function Rt(t){const e={...s,...t};return i.n_(Ft,e)}const Jt=i.J1`
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
`;function Ot(t){const e={...s,...t};return i.IT(Jt,e)}const Nt=i.J1`
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
`;function _t(t){const e={...s,...t};return i.n_(Nt,e)}const qt=i.J1`
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
	${v}
`;function xt(t){const e={...s,...t};return i.IT(qt,e)}const Dt=i.J1`
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
	${v}
`;function Mt(t){const e={...s,...t};return i.IT(Dt,e)}const Bt=i.J1`
	mutation ReportIssueOfCatalog($input: CatalogIssueInput!) {
		reportCatalogIssue(input: $input) {
			... on ReportCatalogIssueMutationOutput {
				success
			}
		}
	}
`;function Ut(t){const e={...s,...t};return i.n_(Bt,e)}const wt=i.J1`
	mutation CreatePlaylist($input: PlaylistCreateMutationInput!) {
		createPlaylist(input: $input) {
			playlist {
				...PlaylistInfo
			}
		}
	}
	${L}
`;function Ht(t){const e={...s,...t};return i.n_(wt,e)}const Gt=i.J1`
	mutation ResetPlaylistCover($input: ResetDefaultPlaylistCoverInput!) {
		resetDefaultPlaylistCover(input: $input) {
			... on ResetDefaultPlaylistCoverMutationOutput {
				playlist {
					...PlaylistInfo
				}
			}
			... on ResetDefaultPlaylistCoverMutationError {
				playlistNotFound
				userIsNotPlaylistOwner
				isLovedTracksPlaylist
			}
		}
	}
	${L}
`;function Wt(t){const e={...s,...t};return i.n_(Gt,e)}const Kt=i.J1`
	mutation UpdatePlaylist($input: PlaylistUpdateMutationInput!) {
		updatePlaylist(input: $input) {
			playlist {
				...PlaylistInfo
			}
		}
	}
	${L}
`;function Vt(t){const e={...s,...t};return i.n_(Kt,e)}const zt=i.J1`
	query PlaylistAssistant($playlistId: String!) {
		playlist(playlistId: $playlistId) {
			...PlaylistInfo
		}
	}
	${L}
`;function Yt(t){const e={...s,...t};return i.IT(zt,e)}function Qt(t){const e={...s,...t};return i._l(zt,e)}const Xt=i.J1`
	query GetLyrics($trackId: String!) {
		track(trackId: $trackId) {
			id
			lyrics {
				id
				text
				...SynchronizedWordByWordLines
				...SynchronizedLines
				licence
				copyright
				writers
			}
		}
	}
	${F}
	${k}
`;function jt(t){const e={...s,...t};return i.IT(Xt,e)}i.J1`
	query SynchronizedLyricsLines($trackId: String!) {
		track(trackId: $trackId) {
			id
			lyrics {
				id
				...SynchronizedLines
			}
		}
	}
	${k}
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
	${F}
`;const Zt=i.J1`
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
	${b}
`;function te(t){const e={...s,...t};return i.IT(Zt,e)}i.J1`
	query UnsynchronizedLyricsLines($trackId: String!) {
		track(trackId: $trackId) {
			id
			lyrics {
				id
				text
			}
		}
	}
`;const ee=i.J1`
	query Tuner {
		me {
			id
			flowTuner {
				discoveryTuner
			}
		}
	}
`;function re(t){const e={...s,...t};return i.UX(ee,e)}const ie=i.J1`
	mutation AddTracksToPlaylist($input: PlaylistAddTracksMutationInput!) {
		addTracksToPlaylist(input: $input) {
			... on PlaylistAddTracksOutput {
				addedTrackIds
				duplicatedTrackIds
			}
		}
	}
`;function se(t){const e={...s,...t};return i.n_(ie,e)}i.J1`
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
	${h}
`;const ne=i.J1`
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
	${R}
`;function ae(t){const e={...s,...t};return i.IT(ne,e)}const oe=i.J1`
	query IsPlaylistBlindtestable($playlistId: String!) {
		playlist(playlistId: $playlistId) {
			id
			isBlindTestable
		}
	}
`;function ce(t){const e={...s,...t};return i.IT(oe,e)}function ue(t){const e={...s,...t};return i.UX(oe,e)}const de=i.J1`
	mutation ClearSearchHistory {
		clearSearchSuccessResult {
			status
		}
	}
`;function le(t){const e={...s,...t};return i.n_(de,e)}const me=i.J1`
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
	${D}
	${N}
	${_}
	${O}
	${q}
	${J}
	${x}
`;function Ie(t){const e={...s,...t};return i.IT(me,e)}function $e(t){const e={...s,...t};return i._l(me,e)}const ye=i.J1`
	query AlbumFull($albumId: String!) {
		album(albumId: $albumId) {
			...AlbumMasthead
		}
	}
	${U}
`;function ge(t){const e={...s,...t};return i.IT(ye,e)}const fe=i.J1`
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
	${M}
	${B}
`;function pe(t){const e={...s,...t};return i.IT(fe,e)}const Se=i.J1`
	query ArtistBiography($artistId: String!) {
		artist(artistId: $artistId) {
			id
			name
			...ArtistBio
		}
	}
	${K}
`;function Ae(t){const e={...s,...t};return i.IT(Se,e)}const Te=i.J1`
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
	${E}
`;function Pe(t){const e={...s,...t};return i.IT(Te,e)}const ve=i.J1`
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
	${M}
	${B}
`;function Ce(t){const e={...s,...t};return i.IT(ve,e)}const he=i.J1`
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
	${z}
	${W}
`;function be(t){const e={...s,...t};return i.IT(he,e)}const Ee=i.J1`
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
	${W}
`;function Le(t){const e={...s,...t};return i.IT(Ee,e)}const ke=i.J1`
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
	${E}
`;function Fe(t){const e={...s,...t};return i.IT(ke,e)}i.J1`
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
	${w}
`;const Re=i.J1`
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
	${G}
`;function Je(t){const e={...s,...t};return i.IT(Re,e)}const Oe=i.J1`
	query LiveEventList($artistId: String!, $liveEventsFirst: Int!) {
		artist(artistId: $artistId) {
			id
			name
			...ArtistLiveEvents
		}
	}
	${H}
`;function Ne(t){const e={...s,...t};return i.IT(Oe,e)}const _e=i.J1`
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
	${It}
`;function qe(t){const e={...s,...t};return i.IT(_e,e)}const xe=i.J1`
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
	${C}
`;function De(t){const e={...s,...t};return i.IT(xe,e)}const Me=i.J1`
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
	${C}
	${h}
	${b}
`;function Be(t){const e={...s,...t};return i.IT(Me,e)}i.J1`
	query LiveEventsRecommended(
		$longitude: Float = null
		$latitude: Float = null
		$first: Int
		$after: String
		$excludeOrigins: [RecommendedLiveEventExcludeOriginsInput!] = null
		$order: RecommendedLiveEventsOrderInput = null
	) {
		liveEventsRecommended(
			longitude: $longitude
			latitude: $latitude
			first: $first
			after: $after
			excludeOrigins: $excludeOrigins
			order: $order
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
					cityName
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
	${C}
	${h}
	${b}
`;const Ue=i.J1`
	query LiveEventsRecommendedClusters(
		$longitude: Float = null
		$latitude: Float = null
		$first: Int
		$after: String
		$excludeOrigins: [RecommendedLiveEventsClustersExcludeOriginsInput!] = null
		$order: RecommendedLiveEventsClustersOrderInput = null
	) {
		liveEventsRecommendedClusters(
			longitude: $longitude
			latitude: $latitude
			first: $first
			after: $after
			excludeOrigins: $excludeOrigins
			order: $order
		) {
			pageInfo {
				endCursor
				hasNextPage
			}
			edges {
				cursor
				node {
					liveEvents(first: 10, after: null) {
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
								name
								startDate
								status
								venue
								cityName
								hasSubscribedToNotification
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
			}
		}
	}
	${C}
	${h}
	${b}
`;function we(t){const e={...s,...t};return i.IT(Ue,e)}const He=i.J1`
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
	${W}
`;function Ge(t){const e={...s,...t};return i.IT(He,e)}const We=i.J1`
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
	${It}
`;function Ke(t){const e={...s,...t};return i.IT(We,e)}const Ve=i.J1`
	query OthersFavorite($userId: String!) {
		user(userId: $userId) {
			id
			favorites {
				estimatedTracksCount
			}
		}
	}
`;function ze(t){const e={...s,...t};return i.UX(Ve,e)}const Ye=i.J1`
	query PlaylistMasthead($playlistId: String!) {
		playlist(playlistId: $playlistId) {
			...PlaylistBase
			description
			isCharts
			isCollaborative
			isPrivate
			isFromFavoriteTracks
			isSponsored
		}
	}
	${E}
`;function Qe(t){const e={...s,...t};return i.IT(Ye,e)}const Xe=i.J1`
	query RecommendationsIncludedArtistsTab(
		$artistFirst: Int
		$artistCursor: String
	) {
		me {
			id
			customizeRecommendations {
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
						metadata {
							favoritedAt
						}
					}
				}
				estimatedArtistsCount
			}
		}
	}
	${W}
`;function je(t){const e={...s,...t};return i.IT(Xe,e)}const Ze=i.J1`
	query RecommendationsIncludedTracksTab(
		$trackFirst: Int
		$trackCursor: String
	) {
		me {
			id
			customizeRecommendations {
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
						metadata {
							trackOrigin
							addedAt
						}
					}
				}
			}
		}
	}
	${It}
`;function tr(t){const e={...s,...t};return i.IT(Ze,e)}const er=i.J1`
	mutation AddAlbumInSearchHistory($albumId: String!) {
		addAlbumInSearchSuccessResult(albumId: $albumId) {
			status
		}
	}
`;function rr(t){const e={...s,...t};return i.n_(er,e)}const ir=i.J1`
	mutation AddArtistInSearchHistory($artistId: String!) {
		addArtistInSearchSuccessResult(artistId: $artistId) {
			status
		}
	}
`;function sr(t){const e={...s,...t};return i.n_(ir,e)}const nr=i.J1`
	mutation AddTrackInSearchHistory($trackId: String!) {
		addTrackInSearchSuccessResult(trackId: $trackId) {
			status
		}
	}
`;function ar(t){const e={...s,...t};return i.n_(nr,e)}const or=i.J1`
	mutation AddPlaylistInSearchHistory($playlistId: String!) {
		addPlaylistInSearchSuccessResult(playlistId: $playlistId) {
			status
		}
	}
`;function cr(t){const e={...s,...t};return i.n_(or,e)}const ur=i.J1`
	mutation AddPodcastInSearchHistory($podcastId: String!) {
		addPodcastInSearchSuccessResult(podcastId: $podcastId) {
			status
		}
	}
`;function dr(t){const e={...s,...t};return i.n_(ur,e)}const lr=i.J1`
	mutation AddPodcastEpisodeInSearchHistory($episodeId: String!) {
		addPodcastEpisodeInSearchSuccessResult(episodeId: $episodeId) {
			status
		}
	}
`;function mr(t){const e={...s,...t};return i.n_(lr,e)}const Ir=i.J1`
	mutation AddLivestreamInSearchHistory($livestreamId: String!) {
		addLivestreamInSearchSuccessResult(livestreamId: $livestreamId) {
			status
		}
	}
`;function $r(t){const e={...s,...t};return i.n_(Ir,e)}const yr=i.J1`
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
	${X}
`;function gr(t){const e={...s,...t};return i.IT(yr,e)}const fr=i.J1`
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
	${Y}
`;function pr(t){const e={...s,...t};return i.IT(fr,e)}const Sr=i.J1`
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
	${j}
`;function Ar(t){const e={...s,...t};return i.IT(Sr,e)}const Tr=i.J1`
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
	${it}
`;function Pr(t){const e={...s,...t};return i.IT(Tr,e)}const vr=i.J1`
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
	${Z}
`;function Cr(t){const e={...s,...t};return i.IT(vr,e)}const hr=i.J1`
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
	${X}
	${Q}
	${et}
	${rt}
	${tt}
	${It}
	${it}
	${Y}
	${j}
	${Z}
	${st}
`;function br(t){const e={...s,...t};return i.IT(hr,e)}const Er=i.J1`
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
	${tt}
`;function Lr(t){const e={...s,...t};return i.IT(Er,e)}const kr=i.J1`
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
	${et}
`;function Fr(t){const e={...s,...t};return i.IT(kr,e)}const Rr=i.J1`
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
	${rt}
`;function Jr(t){const e={...s,...t};return i.IT(Rr,e)}i.J1`
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
	${X}
	${Y}
	${et}
	${rt}
	${tt}
`;const Or=i.J1`
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
	${It}
`;function Nr(t){const e={...s,...t};return i.IT(Or,e)}const _r=i.J1`
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
	${st}
`;function qr(t){const e={...s,...t};return i.IT(_r,e)}i.J1`
	query SynchronizedTrackLyrics($trackId: String!) {
		track(trackId: $trackId) {
			...SynchronizedTrackLyrics
		}
	}
	${mt}
`;const xr=i.J1`
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
	${ct}
	${nt}
	${ut}
`;function Dr(t){const e={...s,...t};return i.IT(xr,e)}const Mr=i.J1`
	query TrackLyrics($trackId: String!) {
		track(trackId: $trackId) {
			...TrackLyrics
		}
	}
	${nt}
`;function Br(t){const e={...s,...t};return i.IT(Mr,e)}const Ur=i.J1`
	query TrackRelatedAlbums(
		$trackId: String!
		$relatedAlbumsFirst: Int
		$relatedAlbumsContributorsFirst: Int
	) {
		track(trackId: $trackId) {
			...TrackRelatedAlbums
		}
	}
	${ut}
`;function wr(t){const e={...s,...t};return i.IT(Ur,e)}const Hr=i.J1`
	mutation AddAlbumToFavorite($albumId: String!) {
		addAlbumToFavorite(albumId: $albumId) {
			album {
				id
				isFavorite
			}
		}
	}
`;function Gr(t){const e={...s,...t};return i.n_(Hr,e)}const Wr=i.J1`
	mutation AddArtistFavorite($artistId: String!) {
		addArtistToFavorite(artistId: $artistId) {
			favoritedAt
			artist {
				id
				isFavorite
			}
		}
	}
`;function Kr(t){const e={...s,...t};return i.n_(Wr,e)}const Vr=i.J1`
	mutation AddPlaylistToFavorite($playlistId: String!) {
		addPlaylistToFavorite(playlistId: $playlistId) {
			playlist {
				id
				isFavorite
			}
		}
	}
`;function zr(t){const e={...s,...t};return i.n_(Vr,e)}const Yr=i.J1`
	mutation AddPodcastToFavorite($podcastId: String!) {
		addPodcastToFavorite(podcastId: $podcastId) {
			podcast {
				id
				isPodcastFavorite: isFavorite
			}
		}
	}
`;function Qr(t){const e={...s,...t};return i.n_(Yr,e)}const Xr=i.J1`
	mutation AddTrackToFavorite($trackId: String!) {
		addTrackToFavorite(trackId: $trackId) {
			track {
				id
				isFavorite
			}
		}
	}
`;function jr(t){const e={...s,...t};return i.n_(Xr,e)}const Zr=i.J1`
	mutation RemoveAlbumFromFavorite($albumId: String!) {
		removeAlbumFromFavorite(albumId: $albumId) {
			album {
				id
				isFavorite
			}
		}
	}
`;function ti(t){const e={...s,...t};return i.n_(Zr,e)}const ei=i.J1`
	mutation RemoveArtistFromFavorite($artistId: String!) {
		removeArtistFromFavorite(artistId: $artistId) {
			artist {
				id
				isFavorite
			}
		}
	}
`;function ri(t){const e={...s,...t};return i.n_(ei,e)}const ii=i.J1`
	mutation RemovePlaylistFromFavorite($playlistId: String!) {
		removePlaylistFromFavorite(playlistId: $playlistId) {
			playlist {
				id
				isFavorite
			}
		}
	}
`;function si(t){const e={...s,...t};return i.n_(ii,e)}const ni=i.J1`
	mutation RemovePodcastFromFavorite($podcastId: String!) {
		removePodcastFromFavorite(podcastId: $podcastId) {
			podcast {
				id
				isPodcastFavorite: isFavorite
			}
		}
	}
`;function ai(t){const e={...s,...t};return i.n_(ni,e)}const oi=i.J1`
	mutation RemoveTrackFromFavorite($trackId: String!) {
		removeTrackFromFavorite(trackId: $trackId) {
			track {
				id
				isFavorite
			}
		}
	}
`;function ci(t){const e={...s,...t};return i.n_(oi,e)}const ui=i.J1`
	mutation BanArtistFromRecommendation($artistId: String!) {
		banArtistFromRecommendation(artistId: $artistId) {
			artist {
				id
				isBannedFromRecommendation
			}
		}
	}
`;function di(t){const e={...s,...t};return i.n_(ui,e)}const li=i.J1`
	mutation UnbanArtistFromRecommendation($artistId: String!) {
		unbanArtistFromRecommendation(artistId: $artistId) {
			artist {
				id
				isBannedFromRecommendation
			}
		}
	}
`;function mi(t){const e={...s,...t};return i.n_(li,e)}const Ii=i.J1`
	mutation BanTrackFromRecommendation($trackId: String!) {
		banTrackFromRecommendation(trackId: $trackId) {
			track {
				id
				isBannedFromRecommendation
			}
		}
	}
`;function $i(t){const e={...s,...t};return i.n_(Ii,e)}const yi=i.J1`
	mutation UnbanTrackFromRecommendation($trackId: String!) {
		unbanTrackFromRecommendation(trackId: $trackId) {
			track {
				id
				isBannedFromRecommendation
			}
		}
	}
`;function gi(t){const e={...s,...t};return i.n_(yi,e)}const fi=i.J1`
	mutation PinItem(
		$id: String!
		$type: QuickAccessTypeInput!
		$context: QuickAccessContextInput!
		$support: [QuickAccessTypeInput!] = [
			ALBUM
			ARTIST
			PLAYLIST
			PODCAST
			FLOW_CONFIG
		]
	) {
		quickAccessAppendItem(input: {id: $id, type: $type, context: $context}) {
			... on QuickAccessAppendItemMutationError {
				isLimitExceed
				isUnsupportedItemType
			}
			... on QuickAccessAppendItemMutationOutput {
				quickAccess {
					pinnedItems(support: $support) {
						item {
							...PinItem
						}
					}
				}
			}
		}
	}
	${ft}
`;function pi(t){const e={...s,...t};return i.n_(fi,e)}const Si=i.J1`
	mutation UnpinItem(
		$id: String!
		$type: QuickAccessTypeInput!
		$context: QuickAccessContextInput!
		$support: [QuickAccessTypeInput!] = [
			ALBUM
			ARTIST
			PLAYLIST
			PODCAST
			FLOW_CONFIG
		]
	) {
		quickAccessUnpinItem(input: {id: $id, type: $type, context: $context}) {
			... on QuickAccessUnpinItemMutationError {
				isItemNotFound
			}
			... on QuickAccessUnpinItemMutationOutput {
				quickAccess {
					pinnedItems(support: $support) {
						item {
							...PinItem
						}
					}
				}
			}
		}
	}
	${ft}
`;function Ai(t){const e={...s,...t};return i.n_(Si,e)}const Ti=i.J1`
	query PinnedDrawerItems(
		$context: QuickAccessContextInput!
		$support: [QuickAccessTypeInput!] = [
			ALBUM
			ARTIST
			PLAYLIST
			PODCAST
			FLOW_CONFIG
			LIVESTREAM
			TRACK
		]
	) {
		me {
			id
			quickAccess(context: $context) {
				suggestedItems(support: $support) {
					item {
						...PinItem
					}
				}
			}
			charts {
				albums {
					edges {
						node {
							...PinDrawerAlbum
						}
					}
				}
				artists {
					edges {
						node {
							... on Artist {
								id
								...ArtistBase
								__typename
							}
						}
					}
				}
				playlists {
					edges {
						node {
							...PinDrawerPlaylist
						}
					}
				}
				podcasts {
					edges {
						node {
							... on Podcast {
								id
								displayTitle
								cover {
									...PictureSmall
								}
								__typename
							}
						}
					}
				}
				flowConfigs {
					edges {
						node {
							... on FlowConfig {
								id
								title
								visuals {
									dynamicPageIcon {
										id
										small: urls(uiAssetRequest: {height: 100, width: 100})
									}
								}
								__typename
							}
						}
					}
				}
				livestreams {
					edges {
						node {
							... on Livestream {
								id
								name
								cover {
									...PictureSmall
								}
								__typename
							}
						}
					}
				}
				tracks {
					edges {
						node {
							...PinDrawerTrack
						}
					}
				}
			}
		}
	}
	${ft}
	${$t}
	${W}
	${yt}
	${C}
	${gt}
`;function Pi(t){const e={...s,...t};return i.IT(Ti,e)}const vi=i.J1`
	query PinnedItems(
		$context: QuickAccessContextInput!
		$support: [QuickAccessTypeInput!] = [
			ALBUM
			ARTIST
			PLAYLIST
			PODCAST
			FLOW_CONFIG
		]
	) {
		me {
			id
			quickAccess(context: $context) {
				pinnedItems(support: $support) {
					item {
						...PinItem
					}
				}
			}
		}
	}
	${ft}
`;function Ci(t){const e={...s,...t};return i.IT(vi,e)}const hi=i.J1`
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
`;function bi(t){const e={...s,...t};return i.IT(hi,e)}}}]);