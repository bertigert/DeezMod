"use strict";(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[1421],{A2sV:(t,r,e)=>{e.d(r,{$1e:()=>ee,$FS:()=>$e,$IV:()=>Zt,AgB:()=>Lr,B1A:()=>$,BMS:()=>gt,BXP:()=>Be,CwG:()=>or,D2L:()=>xr,DCO:()=>Mt,DI4:()=>ye,DNU:()=>Re,Dh1:()=>me,DpH:()=>Dt,Dvu:()=>y,EG:()=>Ht,FJX:()=>ai,Ggf:()=>qt,H91:()=>Oe,Hi1:()=>ir,HwP:()=>We,I7O:()=>ze,IoY:()=>Se,KDJ:()=>Er,KuJ:()=>S,LHG:()=>m,LLq:()=>mr,LQK:()=>we,LrA:()=>c,M7C:()=>Ke,Mij:()=>a,MmF:()=>he,N$N:()=>u,N6A:()=>ft,O7r:()=>bt,OD9:()=>dr,ONi:()=>mi,ORW:()=>Pr,PKC:()=>ti,QNb:()=>Yr,RsC:()=>se,SNU:()=>cr,TF:()=>Jr,T_E:()=>Sr,U3y:()=>Ut,UJq:()=>Yt,V9d:()=>vt,Vc2:()=>Mr,Wyk:()=>$r,XBt:()=>tr,Y1z:()=>Wt,Ypw:()=>Kt,ZO1:()=>It,_At:()=>xe,a40:()=>Ye,aZE:()=>Or,bVd:()=>Kr,by3:()=>l,ct1:()=>T,dj:()=>kt,efT:()=>Pe,epo:()=>ar,fL0:()=>Le,fSF:()=>Br,g1V:()=>nr,gWG:()=>Rr,hWf:()=>zr,iqi:()=>o,jky:()=>Wr,kqj:()=>zt,kuS:()=>Zr,l4E:()=>de,mAL:()=>ur,mcr:()=>ae,nPg:()=>Ze,nZ$:()=>ce,oih:()=>Tt,ovp:()=>te,p9C:()=>_r,qAq:()=>ei,rb0:()=>I,rdE:()=>d,rqF:()=>g,sJs:()=>ci,sV3:()=>n,sfq:()=>Nt,t1v:()=>pe,tjO:()=>hr,u0N:()=>At,v4u:()=>di,vi:()=>f,vjx:()=>Ct,w8_:()=>Je,we3:()=>si,weQ:()=>Ft,wgW:()=>pr,wi_:()=>yr,x87:()=>wr,xxF:()=>er,y02:()=>Ee,yJp:()=>_e,yRK:()=>Ar});var i=e("Au7y");const s={};let n=function(t){return t.ALPHA="ALPHA",t.NONE="NONE",t.RANK="RANK",t.RELEASE_DATE="RELEASE_DATE",t}({}),a=function(t){return t.COMPILATION="COMPILATION",t.KARAOKE="KARAOKE",t.LIVE="LIVE",t.STUDIO="STUDIO",t}({}),o=function(t){return t.ALBUM="ALBUM",t.EP="EP",t.SINGLES="SINGLES",t.UNKNOWN="UNKNOWN",t}({}),c=function(t){return t.AUDIO="AUDIO",t.EXPLICIT_CONTENT="EXPLICIT_CONTENT",t.OTHER="OTHER",t.WRONG_ARTIST="WRONG_ARTIST",t}({}),u=function(t){return t.ARTIST_ALREADY_EXIST="ARTIST_ALREADY_EXIST",t.EXPLICIT_CONTENT="EXPLICIT_CONTENT",t.OTHER="OTHER",t.WRONG_PICTURE="WRONG_PICTURE",t}({}),d=function(t){return t.AUDIO="AUDIO",t.EXPLICIT_CONTENT="EXPLICIT_CONTENT",t.OTHER="OTHER",t.WRONG_ARTIST="WRONG_ARTIST",t}({}),l=function(t){return t.FEATURED="FEATURED",t.MAIN="MAIN",t}({}),m=function(t){return t.PICKED_FROM_FAVORITES_ALBUMS="PICKED_FROM_FAVORITES_ALBUMS",t.PICKED_FROM_FAVORITES_ARTISTS="PICKED_FROM_FAVORITES_ARTISTS",t.PICKED_FROM_FAVORITES_TRACKS="PICKED_FROM_FAVORITES_TRACKS",t.PICKED_FROM_USERS_CREATED_PLAYLIST="PICKED_FROM_USERS_CREATED_PLAYLIST",t.RECENTLY_STREAMED_ON_REPEAT="RECENTLY_STREAMED_ON_REPEAT",t.UNKNOWN="UNKNOWN",t}({}),I=function(t){return t.ALL="ALL",t.NON_OFFICIAL="NON_OFFICIAL",t.OFFICIAL="OFFICIAL",t}({}),$=function(t){return t.DEFAULT="DEFAULT",t.DISCOVERY="DISCOVERY",t}({}),f=function(t){return t.CANCELLED="CANCELLED",t.ENDED="ENDED",t.PENDING="PENDING",t.STARTED="STARTED",t}({}),y=function(t){return t.ARTISTS_PICKER="ARTISTS_PICKER",t.IMPROVE="IMPROVE",t.MUSIC_TOGETHER="MUSIC_TOGETHER",t.WELCOME="WELCOME",t}({}),g=function(t){return t.FALLBACK="FALLBACK",t}({}),S=function(t){return t.CONCERT_DATE="CONCERT_DATE",t.RECOMMENDED="RECOMMENDED",t}({}),T=function(t){return t.DEEZER_SESSION="DEEZER_SESSION",t.DOCUMENTARY="DOCUMENTARY",t.INTERVIEW="INTERVIEW",t.REPLAY="REPLAY",t.TRAILER="TRAILER",t}({});const p=i.J1`
	fragment PictureXSmall on Picture {
		id
		xxx_small: urls(pictureRequest: {width: 40, height: 40})
		explicitStatus
	}
`,A=i.J1`
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
	${p}
`,P=i.J1`
	fragment PictureSmall on Picture {
		id
		small: urls(pictureRequest: {height: 100, width: 100})
		explicitStatus
	}
`,v=i.J1`
	fragment PictureMedium on Picture {
		id
		medium: urls(pictureRequest: {width: 264, height: 264})
		explicitStatus
	}
`,h=i.J1`
	fragment PictureLarge on Picture {
		id
		large: urls(pictureRequest: {width: 500, height: 500})
		explicitStatus
	}
`,b=i.J1`
	fragment PlaylistBase on Playlist {
		id
		picture {
			...PictureSmall
			...PictureMedium
			...PictureLarge
		}
		title
	}
	${P}
	${v}
	${h}
`,E=i.J1`
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
	${b}
	${P}
	${v}
`,C=i.J1`
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
`,L=i.J1`
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
`,F=i.J1`
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
	${P}
`,R=i.J1`
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
	${P}
`,k=i.J1`
	fragment ArtistSearchHistory on Artist {
		id
		name
		fansCount
		picture {
			...PictureSmall
		}
	}
	${P}
`,J=i.J1`
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
	${P}
`,N=i.J1`
	fragment LiveStreamSearchHistory on Livestream {
		id
		name
		isOnStream
		cover {
			...PictureSmall
		}
	}
	${P}
`,O=i.J1`
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
	${P}
`,q=i.J1`
	fragment PodcastSearchHistory on Podcast {
		id
		displayTitle
		description
		cover {
			...PictureSmall
		}
	}
	${P}
`,_=i.J1`
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
	${P}
`,D=i.J1`
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
	${P}
	${v}
	${h}
`,x=i.J1`
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
	${P}
	${v}
	${h}
`,M=i.J1`
	fragment AlbumMasthead on Album {
		...AlbumBase
		...AlbumContributors
		duration
		fansCount
	}
	${D}
	${x}
`,B=i.J1`
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
`,U=i.J1`
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
`,w=i.J1`
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
`,H=i.J1`
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
	${P}
	${v}
	${h}
`,W=i.J1`
	fragment ArtistBio on Artist {
		bio {
			full
		}
	}
`,G=i.J1`
	fragment ArtistSocial on Artist {
		social {
			twitter
			facebook
			website
		}
	}
`,K=i.J1`
	fragment ArtistMasthead on Artist {
		...ArtistBase
		...ArtistBio
		...ArtistSocial
		onTour
		status
	}
	${H}
	${W}
	${G}
`,V=i.J1`
	fragment SearchArtist on Artist {
		id
		isFavorite
		name
		fansCount
		picture {
			...PictureLarge
		}
	}
	${h}
`,z=i.J1`
	fragment BestResultArtist on Artist {
		...SearchArtist
		hasSmartRadio
		hasTopTracks
	}
	${V}
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
	${h}
`,Y=i.J1`
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
	${h}
`,j=i.J1`
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
`,Z=i.J1`
	fragment SearchLivestream on Livestream {
		id
		name
		cover {
			...PictureLarge
		}
	}
	${h}
`,Q=i.J1`
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
	${h}
`,tt=i.J1`
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
	${h}
`,rt=i.J1`
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
	${P}
	${h}
`,et=i.J1`
	fragment SearchUser on User {
		id
		name
		picture {
			...PictureLarge
		}
	}
	${h}
`,it=i.J1`
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
`,st=i.J1`
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
	${P}
	${v}
	${h}
`,nt=i.J1`
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
	${st}
	${P}
	${v}
	${h}
`,at=i.J1`
	fragment TrackMasthead on Track {
		...TrackBase
		duration
		isExplicit
	}
	${nt}
`,ot=i.J1`
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
	${nt}
	${D}
`,ct=i.J1`
	fragment LyricsSynchronizedLines on LyricsSynchronizedLine {
		lrcTimestamp
		line
		lineTranslated
		milliseconds
		duration
	}
`,ut=i.J1`
	fragment Lyrics on Lyrics {
		id
		copyright
		text
		writers
		synchronizedLines {
			...LyricsSynchronizedLines
		}
	}
	${ct}
`,dt=i.J1`
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
	${ut}
	${P}
	${v}
	${h}
`,lt=i.J1`
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
	${p}
	${h}
`,mt=i.J1`
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
`;function It(t){const r={...s,...t};return i.IT(mt,r)}const $t=i.J1`
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
`;function ft(t){const r={...s,...t};return i._l($t,r)}const yt=i.J1`
	mutation SubscribeToLiveEventNotification($eventId: String!) {
		subscribeToLiveEventNotification(liveEventId: $eventId) {
			status
			liveEvent {
				id
				hasSubscribedToNotification
			}
		}
	}
`;function gt(t){const r={...s,...t};return i.n_(yt,r)}const St=i.J1`
	mutation UnsubscribeToLiveEventNotification($eventId: String!) {
		unsubscribeToLiveEventNotification(liveEventId: $eventId) {
			status
			liveEvent {
				id
				hasSubscribedToNotification
			}
		}
	}
`;function Tt(t){const r={...s,...t};return i.n_(St,r)}const pt=i.J1`
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
`;function At(t){const r={...s,...t};return i.IT(pt,r)}const Pt=i.J1`
	query ArtistsPickerOnboardingStepInfo($context: OnboardingContextInput) {
		onboardingSteps(context: $context) {
			artistsPicker {
				minimumArtistsToPick
				maximumArtistsToPick
				displayGenreBar
			}
		}
	}
`;function vt(t){const r={...s,...t};return i.IT(Pt,r)}const ht=i.J1`
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
`;function bt(t){const r={...s,...t};return i.n_(ht,r)}const Et=i.J1`
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
`;function Ct(t){const r={...s,...t};return i.IT(Et,r)}const Lt=i.J1`
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
`;function Ft(t){const r={...s,...t};return i.n_(Lt,r)}const Rt=i.J1`
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
	${A}
`;function kt(t){const r={...s,...t};return i.IT(Rt,r)}const Jt=i.J1`
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
	${A}
`;function Nt(t){const r={...s,...t};return i.IT(Jt,r)}const Ot=i.J1`
	mutation ReportIssueOfCatalog($input: CatalogIssueInput!) {
		reportCatalogIssue(input: $input) {
			... on ReportCatalogIssueMutationOutput {
				success
			}
		}
	}
`;function qt(t){const r={...s,...t};return i.n_(Ot,r)}const _t=i.J1`
	mutation CreatePlaylist($input: PlaylistCreateMutationInput!) {
		createPlaylist(input: $input) {
			playlist {
				...PlaylistInfo
			}
		}
	}
	${E}
`;function Dt(t){const r={...s,...t};return i.n_(_t,r)}const xt=i.J1`
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
	${E}
`;function Mt(t){const r={...s,...t};return i.n_(xt,r)}const Bt=i.J1`
	mutation UpdatePlaylist($input: PlaylistUpdateMutationInput!) {
		updatePlaylist(input: $input) {
			playlist {
				...PlaylistInfo
			}
		}
	}
	${E}
`;function Ut(t){const r={...s,...t};return i.n_(Bt,r)}const wt=i.J1`
	query PlaylistAssistant($playlistId: String!) {
		playlist(playlistId: $playlistId) {
			...PlaylistInfo
		}
	}
	${E}
`;function Ht(t){const r={...s,...t};return i.IT(wt,r)}function Wt(t){const r={...s,...t};return i._l(wt,r)}const Gt=i.J1`
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
	${L}
	${C}
`;function Kt(t){const r={...s,...t};return i.IT(Gt,r)}i.J1`
	query SynchronizedLyricsLines($trackId: String!) {
		track(trackId: $trackId) {
			id
			lyrics {
				id
				...SynchronizedLines
			}
		}
	}
	${C}
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
	${L}
`;const Vt=i.J1`
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
	${h}
`;function zt(t){const r={...s,...t};return i.IT(Vt,r)}i.J1`
	query UnsynchronizedLyricsLines($trackId: String!) {
		track(trackId: $trackId) {
			id
			lyrics {
				id
				text
			}
		}
	}
`;const Xt=i.J1`
	query Tuner {
		me {
			id
			flowTuner {
				discoveryTuner
			}
		}
	}
`;function Yt(t){const r={...s,...t};return i.UX(Xt,r)}const jt=i.J1`
	mutation AddTracksToPlaylist($input: PlaylistAddTracksMutationInput!) {
		addTracksToPlaylist(input: $input) {
			... on PlaylistAddTracksOutput {
				addedTrackIds
				duplicatedTrackIds
			}
		}
	}
`;function Zt(t){const r={...s,...t};return i.n_(jt,r)}i.J1`
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
	${v}
`;const Qt=i.J1`
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
	${F}
`;function tr(t){const r={...s,...t};return i.IT(Qt,r)}const rr=i.J1`
	query IsPlaylistBlindtestable($playlistId: String!) {
		playlist(playlistId: $playlistId) {
			id
			isBlindTestable
		}
	}
`;function er(t){const r={...s,...t};return i.IT(rr,r)}function ir(t){const r={...s,...t};return i.UX(rr,r)}const sr=i.J1`
	mutation ClearSearchHistory {
		clearSearchSuccessResult {
			status
		}
	}
`;function nr(t){const r={...s,...t};return i.n_(sr,r)}const ar=i.J1`
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
	${_}
	${J}
	${N}
	${k}
	${O}
	${R}
	${q}
`;function or(t){const r={...s,...t};return i.IT(ar,r)}function cr(t){const r={...s,...t};return i._l(ar,r)}const ur=i.J1`
	query AlbumFull($albumId: String!) {
		album(albumId: $albumId) {
			...AlbumMasthead
		}
	}
	${M}
`;function dr(t){const r={...s,...t};return i.IT(ur,r)}const lr=i.J1`
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
	${D}
	${x}
`;function mr(t){const r={...s,...t};return i.IT(lr,r)}const Ir=i.J1`
	query ArtistBiography($artistId: String!) {
		artist(artistId: $artistId) {
			id
			name
			...ArtistBio
		}
	}
	${W}
`;function $r(t){const r={...s,...t};return i.IT(Ir,r)}const fr=i.J1`
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
	${b}
`;function yr(t){const r={...s,...t};return i.IT(fr,r)}const gr=i.J1`
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
	${D}
	${x}
`;function Sr(t){const r={...s,...t};return i.IT(gr,r)}const Tr=i.J1`
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
	${K}
	${H}
`;function pr(t){const r={...s,...t};return i.IT(Tr,r)}const Ar=i.J1`
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
	${H}
`;function Pr(t){const r={...s,...t};return i.IT(Ar,r)}const vr=i.J1`
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
	${b}
`;function hr(t){const r={...s,...t};return i.IT(vr,r)}i.J1`
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
	${B}
`;const br=i.J1`
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
	${w}
`;function Er(t){const r={...s,...t};return i.IT(br,r)}const Cr=i.J1`
	query LiveEventList($artistId: String!, $liveEventsFirst: Int!) {
		artist(artistId: $artistId) {
			id
			name
			...ArtistLiveEvents
		}
	}
	${U}
`;function Lr(t){const r={...s,...t};return i.IT(Cr,r)}const Fr=i.J1`
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
	${lt}
`;function Rr(t){const r={...s,...t};return i.IT(Fr,r)}const kr=i.J1`
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
	${P}
`;function Jr(t){const r={...s,...t};return i.IT(kr,r)}const Nr=i.J1`
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
	${P}
	${v}
	${h}
`;function Or(t){const r={...s,...t};return i.IT(Nr,r)}i.J1`
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
	${P}
	${v}
	${h}
`;const qr=i.J1`
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
	${P}
	${v}
	${h}
`;function _r(t){const r={...s,...t};return i.IT(qr,r)}const Dr=i.J1`
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
	${H}
`;function xr(t){const r={...s,...t};return i.IT(Dr,r)}const Mr=i.J1`
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
	${lt}
`;function Br(t){const r={...s,...t};return i.IT(Mr,r)}const Ur=i.J1`
	query OthersFavorite($userId: String!) {
		user(userId: $userId) {
			id
			favorites {
				estimatedTracksCount
			}
		}
	}
`;function wr(t){const r={...s,...t};return i.UX(Ur,r)}const Hr=i.J1`
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
	${b}
`;function Wr(t){const r={...s,...t};return i.IT(Hr,r)}const Gr=i.J1`
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
	${H}
`;function Kr(t){const r={...s,...t};return i.IT(Gr,r)}const Vr=i.J1`
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
	${lt}
`;function zr(t){const r={...s,...t};return i.IT(Vr,r)}const Xr=i.J1`
	mutation AddAlbumInSearchHistory($albumId: String!) {
		addAlbumInSearchSuccessResult(albumId: $albumId) {
			status
		}
	}
`;function Yr(t){const r={...s,...t};return i.n_(Xr,r)}const jr=i.J1`
	mutation AddArtistInSearchHistory($artistId: String!) {
		addArtistInSearchSuccessResult(artistId: $artistId) {
			status
		}
	}
`;function Zr(t){const r={...s,...t};return i.n_(jr,r)}const Qr=i.J1`
	mutation AddTrackInSearchHistory($trackId: String!) {
		addTrackInSearchSuccessResult(trackId: $trackId) {
			status
		}
	}
`;function te(t){const r={...s,...t};return i.n_(Qr,r)}const re=i.J1`
	mutation AddPlaylistInSearchHistory($playlistId: String!) {
		addPlaylistInSearchSuccessResult(playlistId: $playlistId) {
			status
		}
	}
`;function ee(t){const r={...s,...t};return i.n_(re,r)}const ie=i.J1`
	mutation AddPodcastInSearchHistory($podcastId: String!) {
		addPodcastInSearchSuccessResult(podcastId: $podcastId) {
			status
		}
	}
`;function se(t){const r={...s,...t};return i.n_(ie,r)}const ne=i.J1`
	mutation AddPodcastEpisodeInSearchHistory($episodeId: String!) {
		addPodcastEpisodeInSearchSuccessResult(episodeId: $episodeId) {
			status
		}
	}
`;function ae(t){const r={...s,...t};return i.n_(ne,r)}const oe=i.J1`
	mutation AddLivestreamInSearchHistory($livestreamId: String!) {
		addLivestreamInSearchSuccessResult(livestreamId: $livestreamId) {
			status
		}
	}
`;function ce(t){const r={...s,...t};return i.n_(oe,r)}const ue=i.J1`
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
`;function de(t){const r={...s,...t};return i.IT(ue,r)}const le=i.J1`
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
	${V}
`;function me(t){const r={...s,...t};return i.IT(le,r)}const Ie=i.J1`
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
	${Y}
`;function $e(t){const r={...s,...t};return i.IT(Ie,r)}const fe=i.J1`
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
	${rt}
`;function ye(t){const r={...s,...t};return i.IT(fe,r)}const ge=i.J1`
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
	${j}
`;function Se(t){const r={...s,...t};return i.IT(ge,r)}const Te=i.J1`
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
	${z}
	${Q}
	${tt}
	${Z}
	${lt}
	${rt}
	${V}
	${Y}
	${j}
	${et}
`;function pe(t){const r={...s,...t};return i.IT(Te,r)}const Ae=i.J1`
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
	${Z}
`;function Pe(t){const r={...s,...t};return i.IT(Ae,r)}const ve=i.J1`
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
	${Q}
`;function he(t){const r={...s,...t};return i.IT(ve,r)}const be=i.J1`
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
	${tt}
`;function Ee(t){const r={...s,...t};return i.IT(be,r)}i.J1`
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
	${V}
	${Q}
	${tt}
	${Z}
`;const Ce=i.J1`
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
	${lt}
`;function Le(t){const r={...s,...t};return i.IT(Ce,r)}const Fe=i.J1`
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
	${et}
`;function Re(t){const r={...s,...t};return i.IT(Fe,r)}i.J1`
	query SynchronizedTrackLyrics($trackId: String!) {
		track(trackId: $trackId) {
			...SynchronizedTrackLyrics
		}
	}
	${dt}
`;const ke=i.J1`
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
	${at}
	${it}
	${ot}
`;function Je(t){const r={...s,...t};return i.IT(ke,r)}const Ne=i.J1`
	query TrackLyrics($trackId: String!) {
		track(trackId: $trackId) {
			...TrackLyrics
		}
	}
	${it}
`;function Oe(t){const r={...s,...t};return i.IT(Ne,r)}const qe=i.J1`
	query TrackRelatedAlbums(
		$trackId: String!
		$relatedAlbumsFirst: Int
		$relatedAlbumsContributorsFirst: Int
	) {
		track(trackId: $trackId) {
			...TrackRelatedAlbums
		}
	}
	${ot}
`;function _e(t){const r={...s,...t};return i.IT(qe,r)}const De=i.J1`
	mutation AddAlbumToFavorite($albumId: String!) {
		addAlbumToFavorite(albumId: $albumId) {
			album {
				id
				isFavorite
			}
		}
	}
`;function xe(t){const r={...s,...t};return i.n_(De,r)}const Me=i.J1`
	mutation AddArtistFavorite($artistId: String!) {
		addArtistToFavorite(artistId: $artistId) {
			favoritedAt
			artist {
				id
				isFavorite
			}
		}
	}
`;function Be(t){const r={...s,...t};return i.n_(Me,r)}const Ue=i.J1`
	mutation AddPlaylistToFavorite($playlistId: String!) {
		addPlaylistToFavorite(playlistId: $playlistId) {
			playlist {
				id
				isFavorite
			}
		}
	}
`;function we(t){const r={...s,...t};return i.n_(Ue,r)}const He=i.J1`
	mutation AddPodcastToFavorite($podcastId: String!) {
		addPodcastToFavorite(podcastId: $podcastId) {
			podcast {
				id
				isPodcastFavorite: isFavorite
			}
		}
	}
`;function We(t){const r={...s,...t};return i.n_(He,r)}const Ge=i.J1`
	mutation AddTrackToFavorite($trackId: String!) {
		addTrackToFavorite(trackId: $trackId) {
			track {
				id
				isFavorite
			}
		}
	}
`;function Ke(t){const r={...s,...t};return i.n_(Ge,r)}const Ve=i.J1`
	mutation RemoveAlbumFromFavorite($albumId: String!) {
		removeAlbumFromFavorite(albumId: $albumId) {
			album {
				id
				isFavorite
			}
		}
	}
`;function ze(t){const r={...s,...t};return i.n_(Ve,r)}const Xe=i.J1`
	mutation RemoveArtistFromFavorite($artistId: String!) {
		removeArtistFromFavorite(artistId: $artistId) {
			artist {
				id
				isFavorite
			}
		}
	}
`;function Ye(t){const r={...s,...t};return i.n_(Xe,r)}const je=i.J1`
	mutation RemovePlaylistFromFavorite($playlistId: String!) {
		removePlaylistFromFavorite(playlistId: $playlistId) {
			playlist {
				id
				isFavorite
			}
		}
	}
`;function Ze(t){const r={...s,...t};return i.n_(je,r)}const Qe=i.J1`
	mutation RemovePodcastFromFavorite($podcastId: String!) {
		removePodcastFromFavorite(podcastId: $podcastId) {
			podcast {
				id
				isPodcastFavorite: isFavorite
			}
		}
	}
`;function ti(t){const r={...s,...t};return i.n_(Qe,r)}const ri=i.J1`
	mutation RemoveTrackFromFavorite($trackId: String!) {
		removeTrackFromFavorite(trackId: $trackId) {
			track {
				id
				isFavorite
			}
		}
	}
`;function ei(t){const r={...s,...t};return i.n_(ri,r)}const ii=i.J1`
	mutation BanArtistFromRecommendation($artistId: String!) {
		banArtistFromRecommendation(artistId: $artistId) {
			artist {
				id
				isBannedFromRecommendation
			}
		}
	}
`;function si(t){const r={...s,...t};return i.n_(ii,r)}const ni=i.J1`
	mutation UnbanArtistFromRecommendation($artistId: String!) {
		unbanArtistFromRecommendation(artistId: $artistId) {
			artist {
				id
				isBannedFromRecommendation
			}
		}
	}
`;function ai(t){const r={...s,...t};return i.n_(ni,r)}const oi=i.J1`
	mutation BanTrackFromRecommendation($trackId: String!) {
		banTrackFromRecommendation(trackId: $trackId) {
			track {
				id
				isBannedFromRecommendation
			}
		}
	}
`;function ci(t){const r={...s,...t};return i.n_(oi,r)}const ui=i.J1`
	mutation UnbanTrackFromRecommendation($trackId: String!) {
		unbanTrackFromRecommendation(trackId: $trackId) {
			track {
				id
				isBannedFromRecommendation
			}
		}
	}
`;function di(t){const r={...s,...t};return i.n_(ui,r)}const li=i.J1`
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
`;function mi(t){const r={...s,...t};return i.IT(li,r)}}}]);