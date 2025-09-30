"use strict";(self.webpackJsonpDeezer=self.webpackJsonpDeezer||[]).push([[1421],{A2sV:(t,e,r)=>{r.d(e,{$1e:()=>Sr,$FS:()=>Rr,$IV:()=>me,AgB:()=>We,B1A:()=>$,BMS:()=>vt,BXP:()=>ss,CN7:()=>he,CwG:()=>Pe,D2L:()=>er,DCO:()=>Qt,DI4:()=>Nr,DNU:()=>Vr,DPj:()=>f,Dh1:()=>Fr,DpH:()=>zt,Dvu:()=>y,EG:()=>te,Ew:()=>Gt,FJX:()=>Cs,Ggf:()=>Ut,H91:()=>Xr,Hi1:()=>pe,HwP:()=>os,I6U:()=>S,I7O:()=>ls,ICy:()=>Xs,IoY:()=>qr,IvY:()=>qs,JAg:()=>le,KDJ:()=>He,KuJ:()=>A,LHG:()=>I,LLq:()=>Fe,LQK:()=>ns,LZl:()=>Bs,LrA:()=>c,M7C:()=>us,Mij:()=>a,MmF:()=>Br,N$N:()=>u,N6A:()=>Pt,O7r:()=>Jt,OD9:()=>be,ONi:()=>Zs,ONu:()=>Ns,ORW:()=>Me,PKC:()=>ys,Q13:()=>Qs,QNb:()=>mr,RsC:()=>Ar,SNU:()=>Ce,Sx2:()=>Vs,TF:()=>Ye,T_E:()=>qe,U3y:()=>jt,UJq:()=>ue,V9d:()=>kt,VZ1:()=>Fs,Vc2:()=>rr,Wyk:()=>Re,XBt:()=>fe,Y1z:()=>ee,YCc:()=>Ys,Ypw:()=>se,ZO1:()=>Tt,_At:()=>es,a40:()=>ms,aD2:()=>oe,aZE:()=>Xe,bVd:()=>ur,by3:()=>l,ct1:()=>P,d8s:()=>Hs,dez:()=>Ds,dj:()=>xt,efT:()=>Mr,epo:()=>Ae,fL0:()=>Wr,fSF:()=>sr,fW1:()=>p,g1V:()=>Te,gWG:()=>Ve,hWf:()=>lr,hhP:()=>Kt,iqi:()=>o,jky:()=>or,kqj:()=>ne,kuS:()=>fr,l4E:()=>br,mAL:()=>Ee,mcr:()=>Cr,nPg:()=>fs,nZ$:()=>hr,oGM:()=>Rs,oih:()=>Et,ovp:()=>yr,p9C:()=>Ze,qAq:()=>Ss,rb0:()=>m,rdE:()=>d,rqF:()=>T,sJs:()=>hs,sV3:()=>n,sfq:()=>wt,t1v:()=>Dr,tjO:()=>Be,tkN:()=>Ws,u0N:()=>Lt,v4u:()=>bs,vi:()=>g,vjx:()=>Ot,w8_:()=>Yr,we3:()=>As,weQ:()=>_t,wgW:()=>De,wi_:()=>Ne,x87:()=>nr,xxF:()=>ye,y02:()=>Hr,yJp:()=>Zr,yRK:()=>xe,zEs:()=>Ms});var s=r("Au7y");const i={};let n=function(t){return t.ALPHA="ALPHA",t.NONE="NONE",t.RANK="RANK",t.RELEASE_DATE="RELEASE_DATE",t}({}),a=function(t){return t.COMPILATION="COMPILATION",t.KARAOKE="KARAOKE",t.LIVE="LIVE",t.STUDIO="STUDIO",t}({}),o=function(t){return t.ALBUM="ALBUM",t.EP="EP",t.SINGLES="SINGLES",t.UNKNOWN="UNKNOWN",t}({}),c=function(t){return t.AUDIO="AUDIO",t.EXPLICIT_CONTENT="EXPLICIT_CONTENT",t.OTHER="OTHER",t.WRONG_ARTIST="WRONG_ARTIST",t}({}),u=function(t){return t.ARTIST_ALREADY_EXIST="ARTIST_ALREADY_EXIST",t.EXPLICIT_CONTENT="EXPLICIT_CONTENT",t.OTHER="OTHER",t.WRONG_PICTURE="WRONG_PICTURE",t}({}),d=function(t){return t.AUDIO="AUDIO",t.EXPLICIT_CONTENT="EXPLICIT_CONTENT",t.OTHER="OTHER",t.WRONG_ARTIST="WRONG_ARTIST",t}({}),l=function(t){return t.FEATURED="FEATURED",t.MAIN="MAIN",t}({}),I=function(t){return t.PICKED_FROM_FAVORITES_ALBUMS="PICKED_FROM_FAVORITES_ALBUMS",t.PICKED_FROM_FAVORITES_ARTISTS="PICKED_FROM_FAVORITES_ARTISTS",t.PICKED_FROM_FAVORITES_TRACKS="PICKED_FROM_FAVORITES_TRACKS",t.PICKED_FROM_USERS_CREATED_PLAYLIST="PICKED_FROM_USERS_CREATED_PLAYLIST",t.RECENTLY_STREAMED_ON_REPEAT="RECENTLY_STREAMED_ON_REPEAT",t.UNKNOWN="UNKNOWN",t}({}),m=function(t){return t.ALL="ALL",t.NON_OFFICIAL="NON_OFFICIAL",t.OFFICIAL="OFFICIAL",t}({}),$=function(t){return t.DEFAULT="DEFAULT",t.DISCOVERY="DISCOVERY",t}({}),f=function(t){return t.ALL="ALL",t.CONSIDERED="CONSIDERED",t.NOT_CONSIDERED="NOT_CONSIDERED",t}({}),g=function(t){return t.CANCELLED="CANCELLED",t.ENDED="ENDED",t.PENDING="PENDING",t.STARTED="STARTED",t}({}),y=function(t){return t.ARTISTS_PICKER="ARTISTS_PICKER",t.IMPROVE="IMPROVE",t.MUSIC_TOGETHER="MUSIC_TOGETHER",t.WELCOME="WELCOME",t}({}),p=function(t){return t.HOMEPAGE="HOMEPAGE",t}({}),S=function(t){return t.ALBUM="ALBUM",t.ARTIST="ARTIST",t.FLOW_CONFIG="FLOW_CONFIG",t.LIVESTREAM="LIVESTREAM",t.PLAYLIST="PLAYLIST",t.PODCAST="PODCAST",t.TRACK="TRACK",t}({}),T=function(t){return t.FALLBACK="FALLBACK",t}({}),A=function(t){return t.CONCERT_DATE="CONCERT_DATE",t.RECOMMENDED="RECOMMENDED",t}({}),P=function(t){return t.DEEZER_SESSION="DEEZER_SESSION",t.DOCUMENTARY="DOCUMENTARY",t.INTERVIEW="INTERVIEW",t.REPLAY="REPLAY",t.TRAILER="TRAILER",t}({});const C=s.J1`
	fragment PictureXSmall on Picture {
		id
		xxx_small: urls(pictureRequest: {width: 40, height: 40})
		explicitStatus
	}
`,v=s.J1`
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
	${C}
`,h=s.J1`
	fragment PictureSmall on Picture {
		id
		small: urls(pictureRequest: {height: 100, width: 100})
		explicitStatus
	}
`,E=s.J1`
	fragment PictureMedium on Picture {
		id
		medium: urls(pictureRequest: {width: 264, height: 264})
		explicitStatus
	}
`,b=s.J1`
	fragment PictureLarge on Picture {
		id
		large: urls(pictureRequest: {width: 500, height: 500})
		explicitStatus
	}
`,L=s.J1`
	fragment PlaylistBase on Playlist {
		id
		picture {
			...PictureSmall
			...PictureMedium
			...PictureLarge
		}
		title
	}
	${h}
	${E}
	${b}
`,F=s.J1`
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
	${L}
	${h}
	${E}
`,k=s.J1`
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
`,R=s.J1`
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
`,J=s.J1`
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
	${h}
`,N=s.J1`
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
	${h}
`,O=s.J1`
	fragment ArtistSearchHistory on Artist {
		id
		name
		fansCount
		picture {
			...PictureSmall
		}
	}
	${h}
`,q=s.J1`
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
	${h}
`,_=s.J1`
	fragment LiveStreamSearchHistory on Livestream {
		id
		name
		isOnStream
		cover {
			...PictureSmall
		}
	}
	${h}
`,D=s.J1`
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
	${h}
`,x=s.J1`
	fragment PodcastSearchHistory on Podcast {
		id
		displayTitle
		description
		cover {
			...PictureSmall
		}
	}
	${h}
`,M=s.J1`
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
	${h}
`,w=s.J1`
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
	${h}
	${E}
	${b}
`,B=s.J1`
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
	${h}
	${E}
	${b}
`,U=s.J1`
	fragment AlbumMasthead on Album {
		...AlbumBase
		...AlbumContributors
		duration
		fansCount
		hasIdentifiedAIContent
	}
	${w}
	${B}
`,H=s.J1`
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
`,G=s.J1`
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
`,W=s.J1`
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
`,K=s.J1`
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
	${h}
	${E}
	${b}
`,V=s.J1`
	fragment ArtistBio on Artist {
		bio {
			full
		}
	}
`,z=s.J1`
	fragment ArtistSocial on Artist {
		social {
			twitter
			facebook
			website
		}
	}
`,Y=s.J1`
	fragment ArtistMasthead on Artist {
		...ArtistBase
		...ArtistBio
		...ArtistSocial
		onTour
		status
	}
	${K}
	${V}
	${z}
`,Q=s.J1`
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
`,X=s.J1`
	fragment BestResultArtist on Artist {
		...SearchArtist
		hasSmartRadio
		hasTopTracks
	}
	${Q}
`,j=s.J1`
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
`,Z=s.J1`
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
		url {
			webUrl
		}
		backgroundColor
	}
	${b}
`,tt=s.J1`
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
`,et=s.J1`
	fragment SearchLivestream on Livestream {
		id
		name
		cover {
			...PictureLarge
		}
	}
	${b}
`,rt=s.J1`
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
`,st=s.J1`
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
`,it=s.J1`
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
	${h}
	${b}
`,nt=s.J1`
	fragment SearchUser on User {
		id
		name
		picture {
			...PictureLarge
		}
	}
	${b}
`,at=s.J1`
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
`,ot=s.J1`
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
	${h}
	${E}
	${b}
`,ct=s.J1`
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
	${ot}
	${h}
	${E}
	${b}
`,ut=s.J1`
	fragment TrackMasthead on Track {
		...TrackBase
		duration
		isExplicit
	}
	${ct}
`,dt=s.J1`
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
	${ct}
	${w}
`,lt=s.J1`
	fragment LyricsSynchronizedLines on LyricsSynchronizedLine {
		lrcTimestamp
		line
		lineTranslated
		milliseconds
		duration
	}
`,It=s.J1`
	fragment Lyrics on Lyrics {
		id
		copyright
		text
		writers
		synchronizedLines {
			...LyricsSynchronizedLines
		}
	}
	${lt}
`,mt=s.J1`
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
	${It}
	${h}
	${E}
	${b}
`,$t=s.J1`
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
	${C}
	${b}
`,ft=s.J1`
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
	${w}
`,gt=s.J1`
	fragment PinDrawerPlaylist on Playlist {
		id
		owner {
			id
			name
		}
		...PlaylistBase
		__typename
	}
	${L}
`,yt=s.J1`
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
	${h}
`,pt=s.J1`
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
	${w}
	${K}
	${L}
	${h}
`,St=s.J1`
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
`;function Tt(t){const e={...i,...t};return s.IT(St,e)}const At=s.J1`
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
`;function Pt(t){const e={...i,...t};return s._l(At,e)}const Ct=s.J1`
	mutation SubscribeToLiveEventNotification($eventId: String!) {
		subscribeToLiveEventNotification(liveEventId: $eventId) {
			status
			liveEvent {
				id
				hasSubscribedToNotification
			}
		}
	}
`;function vt(t){const e={...i,...t};return s.n_(Ct,e)}const ht=s.J1`
	mutation UnsubscribeToLiveEventNotification($eventId: String!) {
		unsubscribeToLiveEventNotification(liveEventId: $eventId) {
			status
			liveEvent {
				id
				hasSubscribedToNotification
			}
		}
	}
`;function Et(t){const e={...i,...t};return s.n_(ht,e)}const bt=s.J1`
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
`;function Lt(t){const e={...i,...t};return s.IT(bt,e)}const Ft=s.J1`
	query ArtistsPickerOnboardingStepInfo($context: OnboardingContextInput) {
		onboardingSteps(context: $context) {
			artistsPicker {
				minimumArtistsToPick
				maximumArtistsToPick
				displayGenreBar
			}
		}
	}
`;function kt(t){const e={...i,...t};return s.IT(Ft,e)}const Rt=s.J1`
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
`;function Jt(t){const e={...i,...t};return s.n_(Rt,e)}const Nt=s.J1`
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
`;function Ot(t){const e={...i,...t};return s.IT(Nt,e)}const qt=s.J1`
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
`;function _t(t){const e={...i,...t};return s.n_(qt,e)}const Dt=s.J1`
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
`;function xt(t){const e={...i,...t};return s.IT(Dt,e)}const Mt=s.J1`
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
`;function wt(t){const e={...i,...t};return s.IT(Mt,e)}const Bt=s.J1`
	mutation ReportIssueOfCatalog($input: CatalogIssueInput!) {
		reportCatalogIssue(input: $input) {
			... on ReportCatalogIssueMutationOutput {
				success
			}
		}
	}
`;function Ut(t){const e={...i,...t};return s.n_(Bt,e)}const Ht=s.J1`
	query FlowConfig(
		$flowConfigId: String!
		$filter: FlowConfigClusterFilter = ALL
	) {
		flowConfig(flowConfigId: $flowConfigId) {
			id
			title
			clusterConfigurations(filter: $filter) {
				edges {
					node {
						id
						cluster {
							id
							title
							artists {
								id
								name
								picture {
									...PictureMedium
								}
							}
						}
						isEnabled
						isEditedByUser
					}
				}
			}
		}
	}
	${E}
`;function Gt(t){const e={...i,...t};return s.IT(Ht,e)}const Wt=s.J1`
	query FlowTunerHeader($flowConfigId: String!) {
		flowConfig(flowConfigId: $flowConfigId) {
			id
			title
			visuals {
				dynamicPageIcon {
					id
					urls(uiAssetRequest: {height: 100, width: 100})
				}
			}
		}
	}
`;function Kt(t){const e={...i,...t};return s.IT(Wt,e)}const Vt=s.J1`
	mutation CreatePlaylist($input: PlaylistCreateMutationInput!) {
		createPlaylist(input: $input) {
			playlist {
				...PlaylistInfo
			}
		}
	}
	${F}
`;function zt(t){const e={...i,...t};return s.n_(Vt,e)}const Yt=s.J1`
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
	${F}
`;function Qt(t){const e={...i,...t};return s.n_(Yt,e)}const Xt=s.J1`
	mutation UpdatePlaylist($input: PlaylistUpdateMutationInput!) {
		updatePlaylist(input: $input) {
			playlist {
				...PlaylistInfo
			}
		}
	}
	${F}
`;function jt(t){const e={...i,...t};return s.n_(Xt,e)}const Zt=s.J1`
	query PlaylistAssistant($playlistId: String!) {
		playlist(playlistId: $playlistId) {
			...PlaylistInfo
		}
	}
	${F}
`;function te(t){const e={...i,...t};return s.IT(Zt,e)}function ee(t){const e={...i,...t};return s._l(Zt,e)}const re=s.J1`
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
	${R}
	${k}
`;function se(t){const e={...i,...t};return s.IT(re,e)}s.J1`
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
`,s.J1`
	query SynchronizedLyricsWordByWord($trackId: String!) {
		track(trackId: $trackId) {
			id
			lyrics {
				id
				...SynchronizedWordByWordLines
			}
		}
	}
	${R}
`;const ie=s.J1`
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
`;function ne(t){const e={...i,...t};return s.IT(ie,e)}s.J1`
	query UnsynchronizedLyricsLines($trackId: String!) {
		track(trackId: $trackId) {
			id
			lyrics {
				id
				text
			}
		}
	}
`;const ae=s.J1`
	query CustomizableFlowConfig($flowConfigId: String!) {
		flowConfig(flowConfigId: $flowConfigId) {
			id
			hasCustomizableClusterConfigurations
		}
	}
`;function oe(t){const e={...i,...t};return s.IT(ae,e)}const ce=s.J1`
	query Tuner {
		me {
			id
			flowTuner {
				discoveryTuner
			}
		}
	}
`;function ue(t){const e={...i,...t};return s.UX(ce,e)}const de=s.J1`
	query GetPalette {
		theming {
			id
			palette {
				id
				accentIdentifier
			}
		}
	}
`;function le(t){const e={...i,...t};return s.IT(de,e)}const Ie=s.J1`
	mutation AddTracksToPlaylist($input: PlaylistAddTracksMutationInput!) {
		addTracksToPlaylist(input: $input) {
			... on PlaylistAddTracksOutput {
				addedTrackIds
				duplicatedTrackIds
			}
		}
	}
`;function me(t){const e={...i,...t};return s.n_(Ie,e)}s.J1`
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
	${E}
`;const $e=s.J1`
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
	${J}
`;function fe(t){const e={...i,...t};return s.IT($e,e)}const ge=s.J1`
	query IsPlaylistBlindtestable($playlistId: String!) {
		playlist(playlistId: $playlistId) {
			id
			isBlindTestable
		}
	}
`;function ye(t){const e={...i,...t};return s.IT(ge,e)}function pe(t){const e={...i,...t};return s.UX(ge,e)}const Se=s.J1`
	mutation ClearSearchHistory {
		clearSearchSuccessResult {
			status
		}
	}
`;function Te(t){const e={...i,...t};return s.n_(Se,e)}const Ae=s.J1`
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
	${M}
	${q}
	${_}
	${O}
	${D}
	${N}
	${x}
`;function Pe(t){const e={...i,...t};return s.IT(Ae,e)}function Ce(t){const e={...i,...t};return s._l(Ae,e)}const ve=s.J1`
	query GetHasPaletteSelector {
		permissions {
			access {
				hasPaletteSelector
			}
		}
	}
`;function he(t){const e={...i,...t};return s.IT(ve,e)}const Ee=s.J1`
	query AlbumFull($albumId: String!) {
		album(albumId: $albumId) {
			...AlbumMasthead
		}
	}
	${U}
`;function be(t){const e={...i,...t};return s.IT(Ee,e)}const Le=s.J1`
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
	${w}
	${B}
`;function Fe(t){const e={...i,...t};return s.IT(Le,e)}const ke=s.J1`
	query ArtistBiography($artistId: String!) {
		artist(artistId: $artistId) {
			id
			name
			...ArtistBio
		}
	}
	${V}
`;function Re(t){const e={...i,...t};return s.IT(ke,e)}const Je=s.J1`
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
	${L}
`;function Ne(t){const e={...i,...t};return s.IT(Je,e)}const Oe=s.J1`
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
	${w}
	${B}
`;function qe(t){const e={...i,...t};return s.IT(Oe,e)}const _e=s.J1`
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
	${Y}
	${K}
`;function De(t){const e={...i,...t};return s.IT(_e,e)}const xe=s.J1`
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
	${K}
`;function Me(t){const e={...i,...t};return s.IT(xe,e)}const we=s.J1`
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
	${L}
`;function Be(t){const e={...i,...t};return s.IT(we,e)}s.J1`
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
`,s.J1`
	query LastConcert($artistId: String!) {
		artist(artistId: $artistId) {
			id
			name
			...ArtistConcert
		}
	}
	${H}
`;const Ue=s.J1`
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
	${W}
`;function He(t){const e={...i,...t};return s.IT(Ue,e)}const Ge=s.J1`
	query LiveEventList($artistId: String!, $liveEventsFirst: Int!) {
		artist(artistId: $artistId) {
			id
			name
			...ArtistLiveEvents
		}
	}
	${G}
`;function We(t){const e={...i,...t};return s.IT(Ge,e)}const Ke=s.J1`
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
	${$t}
`;function Ve(t){const e={...i,...t};return s.IT(Ke,e)}const ze=s.J1`
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
	${h}
`;function Ye(t){const e={...i,...t};return s.IT(ze,e)}const Qe=s.J1`
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
	${h}
	${E}
	${b}
`;function Xe(t){const e={...i,...t};return s.IT(Qe,e)}s.J1`
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
	${h}
	${E}
	${b}
`;const je=s.J1`
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
	${h}
	${E}
	${b}
`;function Ze(t){const e={...i,...t};return s.IT(je,e)}const tr=s.J1`
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
	${K}
`;function er(t){const e={...i,...t};return s.IT(tr,e)}const rr=s.J1`
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
	${$t}
`;function sr(t){const e={...i,...t};return s.IT(rr,e)}const ir=s.J1`
	query OthersFavorite($userId: String!) {
		user(userId: $userId) {
			id
			favorites {
				estimatedTracksCount
			}
		}
	}
`;function nr(t){const e={...i,...t};return s.UX(ir,e)}const ar=s.J1`
	query PlaylistMasthead($playlistId: String!) {
		playlist(playlistId: $playlistId) {
			...PlaylistBase
			description
			isCharts
			isCollaborative
			isPrivate
			isFromFavoriteTracks
		}
	}
	${L}
`;function or(t){const e={...i,...t};return s.IT(ar,e)}const cr=s.J1`
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
	${K}
`;function ur(t){const e={...i,...t};return s.IT(cr,e)}const dr=s.J1`
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
	${$t}
`;function lr(t){const e={...i,...t};return s.IT(dr,e)}const Ir=s.J1`
	mutation AddAlbumInSearchHistory($albumId: String!) {
		addAlbumInSearchSuccessResult(albumId: $albumId) {
			status
		}
	}
`;function mr(t){const e={...i,...t};return s.n_(Ir,e)}const $r=s.J1`
	mutation AddArtistInSearchHistory($artistId: String!) {
		addArtistInSearchSuccessResult(artistId: $artistId) {
			status
		}
	}
`;function fr(t){const e={...i,...t};return s.n_($r,e)}const gr=s.J1`
	mutation AddTrackInSearchHistory($trackId: String!) {
		addTrackInSearchSuccessResult(trackId: $trackId) {
			status
		}
	}
`;function yr(t){const e={...i,...t};return s.n_(gr,e)}const pr=s.J1`
	mutation AddPlaylistInSearchHistory($playlistId: String!) {
		addPlaylistInSearchSuccessResult(playlistId: $playlistId) {
			status
		}
	}
`;function Sr(t){const e={...i,...t};return s.n_(pr,e)}const Tr=s.J1`
	mutation AddPodcastInSearchHistory($podcastId: String!) {
		addPodcastInSearchSuccessResult(podcastId: $podcastId) {
			status
		}
	}
`;function Ar(t){const e={...i,...t};return s.n_(Tr,e)}const Pr=s.J1`
	mutation AddPodcastEpisodeInSearchHistory($episodeId: String!) {
		addPodcastEpisodeInSearchSuccessResult(episodeId: $episodeId) {
			status
		}
	}
`;function Cr(t){const e={...i,...t};return s.n_(Pr,e)}const vr=s.J1`
	mutation AddLivestreamInSearchHistory($livestreamId: String!) {
		addLivestreamInSearchSuccessResult(livestreamId: $livestreamId) {
			status
		}
	}
`;function hr(t){const e={...i,...t};return s.n_(vr,e)}const Er=s.J1`
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
	${j}
`;function br(t){const e={...i,...t};return s.IT(Er,e)}const Lr=s.J1`
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
	${Q}
`;function Fr(t){const e={...i,...t};return s.IT(Lr,e)}const kr=s.J1`
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
	${Z}
`;function Rr(t){const e={...i,...t};return s.IT(kr,e)}const Jr=s.J1`
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
`;function Nr(t){const e={...i,...t};return s.IT(Jr,e)}const Or=s.J1`
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
	${tt}
`;function qr(t){const e={...i,...t};return s.IT(Or,e)}const _r=s.J1`
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
	${j}
	${X}
	${rt}
	${st}
	${et}
	${$t}
	${it}
	${Q}
	${Z}
	${tt}
	${nt}
`;function Dr(t){const e={...i,...t};return s.IT(_r,e)}const xr=s.J1`
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
	${et}
`;function Mr(t){const e={...i,...t};return s.IT(xr,e)}const wr=s.J1`
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
	${rt}
`;function Br(t){const e={...i,...t};return s.IT(wr,e)}const Ur=s.J1`
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
	${st}
`;function Hr(t){const e={...i,...t};return s.IT(Ur,e)}s.J1`
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
	${j}
	${Q}
	${rt}
	${st}
	${et}
`;const Gr=s.J1`
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
	${$t}
`;function Wr(t){const e={...i,...t};return s.IT(Gr,e)}const Kr=s.J1`
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
	${nt}
`;function Vr(t){const e={...i,...t};return s.IT(Kr,e)}s.J1`
	query SynchronizedTrackLyrics($trackId: String!) {
		track(trackId: $trackId) {
			...SynchronizedTrackLyrics
		}
	}
	${mt}
`;const zr=s.J1`
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
	${ut}
	${at}
	${dt}
`;function Yr(t){const e={...i,...t};return s.IT(zr,e)}const Qr=s.J1`
	query TrackLyrics($trackId: String!) {
		track(trackId: $trackId) {
			...TrackLyrics
		}
	}
	${at}
`;function Xr(t){const e={...i,...t};return s.IT(Qr,e)}const jr=s.J1`
	query TrackRelatedAlbums(
		$trackId: String!
		$relatedAlbumsFirst: Int
		$relatedAlbumsContributorsFirst: Int
	) {
		track(trackId: $trackId) {
			...TrackRelatedAlbums
		}
	}
	${dt}
`;function Zr(t){const e={...i,...t};return s.IT(jr,e)}const ts=s.J1`
	mutation AddAlbumToFavorite($albumId: String!) {
		addAlbumToFavorite(albumId: $albumId) {
			album {
				id
				isFavorite
			}
		}
	}
`;function es(t){const e={...i,...t};return s.n_(ts,e)}const rs=s.J1`
	mutation AddArtistFavorite($artistId: String!) {
		addArtistToFavorite(artistId: $artistId) {
			favoritedAt
			artist {
				id
				isFavorite
			}
		}
	}
`;function ss(t){const e={...i,...t};return s.n_(rs,e)}const is=s.J1`
	mutation AddPlaylistToFavorite($playlistId: String!) {
		addPlaylistToFavorite(playlistId: $playlistId) {
			playlist {
				id
				isFavorite
			}
		}
	}
`;function ns(t){const e={...i,...t};return s.n_(is,e)}const as=s.J1`
	mutation AddPodcastToFavorite($podcastId: String!) {
		addPodcastToFavorite(podcastId: $podcastId) {
			podcast {
				id
				isPodcastFavorite: isFavorite
			}
		}
	}
`;function os(t){const e={...i,...t};return s.n_(as,e)}const cs=s.J1`
	mutation AddTrackToFavorite($trackId: String!) {
		addTrackToFavorite(trackId: $trackId) {
			track {
				id
				isFavorite
			}
		}
	}
`;function us(t){const e={...i,...t};return s.n_(cs,e)}const ds=s.J1`
	mutation RemoveAlbumFromFavorite($albumId: String!) {
		removeAlbumFromFavorite(albumId: $albumId) {
			album {
				id
				isFavorite
			}
		}
	}
`;function ls(t){const e={...i,...t};return s.n_(ds,e)}const Is=s.J1`
	mutation RemoveArtistFromFavorite($artistId: String!) {
		removeArtistFromFavorite(artistId: $artistId) {
			artist {
				id
				isFavorite
			}
		}
	}
`;function ms(t){const e={...i,...t};return s.n_(Is,e)}const $s=s.J1`
	mutation RemovePlaylistFromFavorite($playlistId: String!) {
		removePlaylistFromFavorite(playlistId: $playlistId) {
			playlist {
				id
				isFavorite
			}
		}
	}
`;function fs(t){const e={...i,...t};return s.n_($s,e)}const gs=s.J1`
	mutation RemovePodcastFromFavorite($podcastId: String!) {
		removePodcastFromFavorite(podcastId: $podcastId) {
			podcast {
				id
				isPodcastFavorite: isFavorite
			}
		}
	}
`;function ys(t){const e={...i,...t};return s.n_(gs,e)}const ps=s.J1`
	mutation RemoveTrackFromFavorite($trackId: String!) {
		removeTrackFromFavorite(trackId: $trackId) {
			track {
				id
				isFavorite
			}
		}
	}
`;function Ss(t){const e={...i,...t};return s.n_(ps,e)}const Ts=s.J1`
	mutation BanArtistFromRecommendation($artistId: String!) {
		banArtistFromRecommendation(artistId: $artistId) {
			artist {
				id
				isBannedFromRecommendation
			}
		}
	}
`;function As(t){const e={...i,...t};return s.n_(Ts,e)}const Ps=s.J1`
	mutation UnbanArtistFromRecommendation($artistId: String!) {
		unbanArtistFromRecommendation(artistId: $artistId) {
			artist {
				id
				isBannedFromRecommendation
			}
		}
	}
`;function Cs(t){const e={...i,...t};return s.n_(Ps,e)}const vs=s.J1`
	mutation BanTrackFromRecommendation($trackId: String!) {
		banTrackFromRecommendation(trackId: $trackId) {
			track {
				id
				isBannedFromRecommendation
			}
		}
	}
`;function hs(t){const e={...i,...t};return s.n_(vs,e)}const Es=s.J1`
	mutation UnbanTrackFromRecommendation($trackId: String!) {
		unbanTrackFromRecommendation(trackId: $trackId) {
			track {
				id
				isBannedFromRecommendation
			}
		}
	}
`;function bs(t){const e={...i,...t};return s.n_(Es,e)}const Ls=s.J1`
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
			TRACK
			LIVESTREAM
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
	${pt}
`;function Fs(t){const e={...i,...t};return s.n_(Ls,e)}const ks=s.J1`
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
			TRACK
			LIVESTREAM
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
	${pt}
`;function Rs(t){const e={...i,...t};return s.n_(ks,e)}const Js=s.J1`
	query PinnedDrawerAlbumItems($albumFirst: Int, $albumCursor: String) {
		me {
			charts {
				albums(first: $albumFirst, after: $albumCursor) {
					pageInfo {
						hasNextPage
						endCursor
					}
					edges {
						node {
							...PinDrawerAlbum
						}
					}
				}
			}
		}
	}
	${ft}
`;function Ns(t){const e={...i,...t};return s.IT(Js,e)}const Os=s.J1`
	query PinnedDrawerArtistItems($artistFirst: Int, $artistCursor: String) {
		me {
			charts {
				artists(first: $artistFirst, after: $artistCursor) {
					pageInfo {
						hasNextPage
						endCursor
					}
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
			}
		}
	}
	${K}
`;function qs(t){const e={...i,...t};return s.IT(Os,e)}const _s=s.J1`
	query PinnedDrawerFlowConfigItems(
		$flowConfigFirst: Int
		$flowConfigCursor: String
	) {
		me {
			charts {
				flowConfigs(first: $flowConfigFirst, after: $flowConfigCursor) {
					pageInfo {
						hasNextPage
						endCursor
					}
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
			}
		}
	}
`;function Ds(t){const e={...i,...t};return s.IT(_s,e)}const xs=s.J1`
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
						}
						... on FlowConfig {
							id
						}
						... on Livestream {
							id
						}
						... on Track {
							id
						}
					}
				}
			}
			charts {
				albums {
					edges {
						node {
							... on Album {
								id
							}
						}
					}
				}
				artists {
					edges {
						node {
							... on Artist {
								id
							}
						}
					}
				}
				playlists {
					edges {
						node {
							... on Playlist {
								id
							}
						}
					}
				}
				podcasts {
					edges {
						node {
							... on Podcast {
								id
							}
						}
					}
				}
				flowConfigs {
					edges {
						node {
							... on FlowConfig {
								id
							}
						}
					}
				}
				livestreams {
					edges {
						node {
							... on Livestream {
								id
							}
						}
					}
				}
				tracks {
					edges {
						node {
							... on Track {
								id
							}
						}
					}
				}
			}
		}
	}
	${w}
	${K}
	${L}
`;function Ms(t){const e={...i,...t};return s.IT(xs,e)}const ws=s.J1`
	query PinnedDrawerLivestreamItems(
		$livestreamFirst: Int
		$livestreamCursor: String
	) {
		me {
			charts {
				livestreams(first: $livestreamFirst, after: $livestreamCursor) {
					pageInfo {
						hasNextPage
						endCursor
					}
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
			}
		}
	}
	${h}
`;function Bs(t){const e={...i,...t};return s.IT(ws,e)}const Us=s.J1`
	query PinnedDrawerPlaylistItems(
		$playlistFirst: Int
		$playlistCursor: String
	) {
		me {
			charts {
				playlists(first: $playlistFirst, after: $playlistCursor) {
					pageInfo {
						hasNextPage
						endCursor
					}
					edges {
						node {
							...PinDrawerPlaylist
						}
					}
				}
			}
		}
	}
	${gt}
`;function Hs(t){const e={...i,...t};return s.IT(Us,e)}const Gs=s.J1`
	query PinnedDrawerPodcastItems($podcastFirst: Int, $podcastCursor: String) {
		me {
			charts {
				podcasts(first: $podcastFirst, after: $podcastCursor) {
					pageInfo {
						hasNextPage
						endCursor
					}
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
			}
		}
	}
	${h}
`;function Ws(t){const e={...i,...t};return s.IT(Gs,e)}const Ks=s.J1`
	query PinnedDrawerSuggestedItems(
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
		}
	}
	${pt}
`;function Vs(t){const e={...i,...t};return s.IT(Ks,e)}const zs=s.J1`
	query PinnedDrawerTrackItems($trackFirst: Int, $trackCursor: String) {
		me {
			charts {
				tracks(first: $trackFirst, after: $trackCursor) {
					pageInfo {
						hasNextPage
						endCursor
					}
					edges {
						node {
							...PinDrawerTrack
						}
					}
				}
			}
		}
	}
	${yt}
`;function Ys(t){const e={...i,...t};return s.IT(zs,e)}const Qs=s.J1`
	query PinnedItems(
		$context: QuickAccessContextInput!
		$support: [QuickAccessTypeInput!] = [
			ALBUM
			ARTIST
			PLAYLIST
			PODCAST
			FLOW_CONFIG
			TRACK
			LIVESTREAM
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
	${pt}
`;function Xs(t){const e={...i,...t};return s.IT(Qs,e)}const js=s.J1`
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
`;function Zs(t){const e={...i,...t};return s.IT(js,e)}}}]);