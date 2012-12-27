// ===================================================================================================
//                           _  __     _ _
//                          | |/ /__ _| | |_ _  _ _ _ __ _
//                          | ' </ _` | |  _| || | '_/ _` |
//                          |_|\_\__,_|_|\__|\_,_|_| \__,_|
//
// This file is part of the Kaltura Collaborative Media Suite which allows users
// to do with audio, video, and animation what Wiki platfroms allow them to do with
// text.
//
// Copyright (C) 2006-2011  Kaltura Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// @ignore
// ===================================================================================================

function KalturaAppearInListType(){
}
KalturaAppearInListType.PARTNER_ONLY = 1;
KalturaAppearInListType.CATEGORY_MEMBERS_ONLY = 3;

function KalturaAssetParamsOrigin(){
}
KalturaAssetParamsOrigin.CONVERT = 0;
KalturaAssetParamsOrigin.INGEST = 1;
KalturaAssetParamsOrigin.CONVERT_WHEN_MISSING = 2;

function KalturaAssetStatus(){
}
KalturaAssetStatus.ERROR = -1;
KalturaAssetStatus.QUEUED = 0;
KalturaAssetStatus.READY = 2;
KalturaAssetStatus.DELETED = 3;
KalturaAssetStatus.IMPORTING = 7;
KalturaAssetStatus.EXPORTING = 9;

function KalturaAttachmentAssetStatus(){
}
KalturaAttachmentAssetStatus.ERROR = -1;
KalturaAttachmentAssetStatus.QUEUED = 0;
KalturaAttachmentAssetStatus.READY = 2;
KalturaAttachmentAssetStatus.DELETED = 3;
KalturaAttachmentAssetStatus.IMPORTING = 7;
KalturaAttachmentAssetStatus.EXPORTING = 9;

function KalturaAuditTrailChangeXmlNodeType(){
}
KalturaAuditTrailChangeXmlNodeType.CHANGED = 1;
KalturaAuditTrailChangeXmlNodeType.ADDED = 2;
KalturaAuditTrailChangeXmlNodeType.REMOVED = 3;

function KalturaAuditTrailContext(){
}
KalturaAuditTrailContext.CLIENT = -1;
KalturaAuditTrailContext.SCRIPT = 0;
KalturaAuditTrailContext.PS2 = 1;
KalturaAuditTrailContext.API_V3 = 2;

function KalturaAuditTrailFileSyncType(){
}
KalturaAuditTrailFileSyncType.FILE = 1;
KalturaAuditTrailFileSyncType.LINK = 2;
KalturaAuditTrailFileSyncType.URL = 3;

function KalturaAuditTrailStatus(){
}
KalturaAuditTrailStatus.PENDING = 1;
KalturaAuditTrailStatus.READY = 2;
KalturaAuditTrailStatus.FAILED = 3;

function KalturaBatchJobErrorTypes(){
}
KalturaBatchJobErrorTypes.APP = 0;
KalturaBatchJobErrorTypes.RUNTIME = 1;
KalturaBatchJobErrorTypes.HTTP = 2;
KalturaBatchJobErrorTypes.CURL = 3;
KalturaBatchJobErrorTypes.KALTURA_API = 4;
KalturaBatchJobErrorTypes.KALTURA_CLIENT = 5;

function KalturaBatchJobStatus(){
}
KalturaBatchJobStatus.PENDING = 0;
KalturaBatchJobStatus.QUEUED = 1;
KalturaBatchJobStatus.PROCESSING = 2;
KalturaBatchJobStatus.PROCESSED = 3;
KalturaBatchJobStatus.MOVEFILE = 4;
KalturaBatchJobStatus.FINISHED = 5;
KalturaBatchJobStatus.FAILED = 6;
KalturaBatchJobStatus.ABORTED = 7;
KalturaBatchJobStatus.ALMOST_DONE = 8;
KalturaBatchJobStatus.RETRY = 9;
KalturaBatchJobStatus.FATAL = 10;
KalturaBatchJobStatus.DONT_PROCESS = 11;
KalturaBatchJobStatus.FINISHED_PARTIALLY = 12;

function KalturaBitRateMode(){
}
KalturaBitRateMode.CBR = 1;
KalturaBitRateMode.VBR = 2;

function KalturaBulkUploadCsvVersion(){
}
KalturaBulkUploadCsvVersion.V1 = 1;
KalturaBulkUploadCsvVersion.V2 = 2;
KalturaBulkUploadCsvVersion.V3 = 3;

function KalturaCaptionAssetStatus(){
}
KalturaCaptionAssetStatus.ERROR = -1;
KalturaCaptionAssetStatus.QUEUED = 0;
KalturaCaptionAssetStatus.READY = 2;
KalturaCaptionAssetStatus.DELETED = 3;
KalturaCaptionAssetStatus.IMPORTING = 7;
KalturaCaptionAssetStatus.EXPORTING = 9;

function KalturaCategoryEntryStatus(){
}
KalturaCategoryEntryStatus.PENDING = 1;
KalturaCategoryEntryStatus.ACTIVE = 2;
KalturaCategoryEntryStatus.DELETED = 3;
KalturaCategoryEntryStatus.REJECTED = 4;

function KalturaCategoryStatus(){
}
KalturaCategoryStatus.UPDATING = 1;
KalturaCategoryStatus.ACTIVE = 2;
KalturaCategoryStatus.DELETED = 3;
KalturaCategoryStatus.PURGED = 4;

function KalturaCategoryUserPermissionLevel(){
}
KalturaCategoryUserPermissionLevel.MANAGER = 0;
KalturaCategoryUserPermissionLevel.MODERATOR = 1;
KalturaCategoryUserPermissionLevel.CONTRIBUTOR = 2;
KalturaCategoryUserPermissionLevel.MEMBER = 3;

function KalturaCategoryUserStatus(){
}
KalturaCategoryUserStatus.ACTIVE = 1;
KalturaCategoryUserStatus.PENDING = 2;
KalturaCategoryUserStatus.NOT_ACTIVE = 3;

function KalturaCommercialUseType(){
}
KalturaCommercialUseType.COMMERCIAL_USE = 1;
KalturaCommercialUseType.NON_COMMERCIAL_USE = 0;

function KalturaContributionPolicyType(){
}
KalturaContributionPolicyType.ALL = 1;
KalturaContributionPolicyType.MEMBERS_WITH_CONTRIBUTION_PERMISSION = 2;

function KalturaControlPanelCommandStatus(){
}
KalturaControlPanelCommandStatus.PENDING = 1;
KalturaControlPanelCommandStatus.HANDLED = 2;
KalturaControlPanelCommandStatus.DONE = 3;
KalturaControlPanelCommandStatus.FAILED = 4;

function KalturaControlPanelCommandTargetType(){
}
KalturaControlPanelCommandTargetType.DATA_CENTER = 1;
KalturaControlPanelCommandTargetType.SCHEDULER = 2;
KalturaControlPanelCommandTargetType.JOB_TYPE = 3;
KalturaControlPanelCommandTargetType.JOB = 4;
KalturaControlPanelCommandTargetType.BATCH = 5;

function KalturaControlPanelCommandType(){
}
KalturaControlPanelCommandType.STOP = 1;
KalturaControlPanelCommandType.START = 2;
KalturaControlPanelCommandType.CONFIG = 3;
KalturaControlPanelCommandType.KILL = 4;

function KalturaCountryRestrictionType(){
}
KalturaCountryRestrictionType.RESTRICT_COUNTRY_LIST = 0;
KalturaCountryRestrictionType.ALLOW_COUNTRY_LIST = 1;

function KalturaCuePointStatus(){
}
KalturaCuePointStatus.READY = 1;
KalturaCuePointStatus.DELETED = 2;

function KalturaDirectoryRestrictionType(){
}
KalturaDirectoryRestrictionType.DONT_DISPLAY = 0;
KalturaDirectoryRestrictionType.DISPLAY_WITH_LINK = 1;

function KalturaDistributionAction(){
}
KalturaDistributionAction.SUBMIT = 1;
KalturaDistributionAction.UPDATE = 2;
KalturaDistributionAction.DELETE = 3;
KalturaDistributionAction.FETCH_REPORT = 4;

function KalturaDistributionErrorType(){
}
KalturaDistributionErrorType.MISSING_FLAVOR = 1;
KalturaDistributionErrorType.MISSING_THUMBNAIL = 2;
KalturaDistributionErrorType.MISSING_METADATA = 3;
KalturaDistributionErrorType.INVALID_DATA = 4;

function KalturaDistributionFieldRequiredStatus(){
}
KalturaDistributionFieldRequiredStatus.NOT_REQUIRED = 0;
KalturaDistributionFieldRequiredStatus.REQUIRED_BY_PROVIDER = 1;
KalturaDistributionFieldRequiredStatus.REQUIRED_BY_PARTNER = 2;

function KalturaDistributionProfileActionStatus(){
}
KalturaDistributionProfileActionStatus.DISABLED = 1;
KalturaDistributionProfileActionStatus.AUTOMATIC = 2;
KalturaDistributionProfileActionStatus.MANUAL = 3;

function KalturaDistributionProfileStatus(){
}
KalturaDistributionProfileStatus.DISABLED = 1;
KalturaDistributionProfileStatus.ENABLED = 2;
KalturaDistributionProfileStatus.DELETED = 3;

function KalturaDistributionProtocol(){
}
KalturaDistributionProtocol.FTP = 1;
KalturaDistributionProtocol.SCP = 2;
KalturaDistributionProtocol.SFTP = 3;
KalturaDistributionProtocol.HTTP = 4;
KalturaDistributionProtocol.HTTPS = 5;

function KalturaDistributionValidationErrorType(){
}
KalturaDistributionValidationErrorType.CUSTOM_ERROR = 0;
KalturaDistributionValidationErrorType.STRING_EMPTY = 1;
KalturaDistributionValidationErrorType.STRING_TOO_LONG = 2;
KalturaDistributionValidationErrorType.STRING_TOO_SHORT = 3;
KalturaDistributionValidationErrorType.INVALID_FORMAT = 4;

function KalturaDocumentType(){
}
KalturaDocumentType.DOCUMENT = 11;
KalturaDocumentType.SWF = 12;
KalturaDocumentType.PDF = 13;

function KalturaDropFolderContentFileHandlerMatchPolicy(){
}
KalturaDropFolderContentFileHandlerMatchPolicy.ADD_AS_NEW = 1;
KalturaDropFolderContentFileHandlerMatchPolicy.MATCH_EXISTING_OR_ADD_AS_NEW = 2;
KalturaDropFolderContentFileHandlerMatchPolicy.MATCH_EXISTING_OR_KEEP_IN_FOLDER = 3;

function KalturaDropFolderFileDeletePolicy(){
}
KalturaDropFolderFileDeletePolicy.MANUAL_DELETE = 1;
KalturaDropFolderFileDeletePolicy.AUTO_DELETE = 2;

function KalturaDropFolderFileStatus(){
}
KalturaDropFolderFileStatus.UPLOADING = 1;
KalturaDropFolderFileStatus.PENDING = 2;
KalturaDropFolderFileStatus.WAITING = 3;
KalturaDropFolderFileStatus.HANDLED = 4;
KalturaDropFolderFileStatus.IGNORE = 5;
KalturaDropFolderFileStatus.DELETED = 6;
KalturaDropFolderFileStatus.PURGED = 7;
KalturaDropFolderFileStatus.NO_MATCH = 8;
KalturaDropFolderFileStatus.ERROR_HANDLING = 9;
KalturaDropFolderFileStatus.ERROR_DELETING = 10;
KalturaDropFolderFileStatus.DOWNLOADING = 11;
KalturaDropFolderFileStatus.ERROR_DOWNLOADING = 12;

function KalturaDropFolderStatus(){
}
KalturaDropFolderStatus.DISABLED = 0;
KalturaDropFolderStatus.ENABLED = 1;
KalturaDropFolderStatus.DELETED = 2;

function KalturaEditorType(){
}
KalturaEditorType.SIMPLE = 1;
KalturaEditorType.ADVANCED = 2;

function KalturaEmailIngestionProfileStatus(){
}
KalturaEmailIngestionProfileStatus.INACTIVE = 0;
KalturaEmailIngestionProfileStatus.ACTIVE = 1;

function KalturaEmailNotificationTemplatePriority(){
}
KalturaEmailNotificationTemplatePriority.HIGH = 1;
KalturaEmailNotificationTemplatePriority.NORMAL = 3;
KalturaEmailNotificationTemplatePriority.LOW = 5;

function KalturaEntryDistributionFlag(){
}
KalturaEntryDistributionFlag.NONE = 0;
KalturaEntryDistributionFlag.SUBMIT_REQUIRED = 1;
KalturaEntryDistributionFlag.DELETE_REQUIRED = 2;
KalturaEntryDistributionFlag.UPDATE_REQUIRED = 3;
KalturaEntryDistributionFlag.ENABLE_REQUIRED = 4;
KalturaEntryDistributionFlag.DISABLE_REQUIRED = 5;

function KalturaEntryDistributionStatus(){
}
KalturaEntryDistributionStatus.PENDING = 0;
KalturaEntryDistributionStatus.QUEUED = 1;
KalturaEntryDistributionStatus.READY = 2;
KalturaEntryDistributionStatus.DELETED = 3;
KalturaEntryDistributionStatus.SUBMITTING = 4;
KalturaEntryDistributionStatus.UPDATING = 5;
KalturaEntryDistributionStatus.DELETING = 6;
KalturaEntryDistributionStatus.ERROR_SUBMITTING = 7;
KalturaEntryDistributionStatus.ERROR_UPDATING = 8;
KalturaEntryDistributionStatus.ERROR_DELETING = 9;
KalturaEntryDistributionStatus.REMOVED = 10;
KalturaEntryDistributionStatus.IMPORT_SUBMITTING = 11;
KalturaEntryDistributionStatus.IMPORT_UPDATING = 12;

function KalturaEntryDistributionSunStatus(){
}
KalturaEntryDistributionSunStatus.BEFORE_SUNRISE = 1;
KalturaEntryDistributionSunStatus.AFTER_SUNRISE = 2;
KalturaEntryDistributionSunStatus.AFTER_SUNSET = 3;

function KalturaEntryModerationStatus(){
}
KalturaEntryModerationStatus.PENDING_MODERATION = 1;
KalturaEntryModerationStatus.APPROVED = 2;
KalturaEntryModerationStatus.REJECTED = 3;
KalturaEntryModerationStatus.FLAGGED_FOR_REVIEW = 5;
KalturaEntryModerationStatus.AUTO_APPROVED = 6;

function KalturaEventNotificationTemplateStatus(){
}
KalturaEventNotificationTemplateStatus.DISABLED = 1;
KalturaEventNotificationTemplateStatus.ACTIVE = 2;
KalturaEventNotificationTemplateStatus.DELETED = 3;

function KalturaFeatureStatusType(){
}
KalturaFeatureStatusType.LOCK_CATEGORY = 1;
KalturaFeatureStatusType.CATEGORY = 2;
KalturaFeatureStatusType.CATEGORY_ENTRY = 3;
KalturaFeatureStatusType.ENTRY = 4;
KalturaFeatureStatusType.CATEGORY_USER = 5;

function KalturaFileSyncStatus(){
}
KalturaFileSyncStatus.ERROR = -1;
KalturaFileSyncStatus.PENDING = 1;
KalturaFileSyncStatus.READY = 2;
KalturaFileSyncStatus.DELETED = 3;
KalturaFileSyncStatus.PURGED = 4;

function KalturaFileSyncType(){
}
KalturaFileSyncType.FILE = 1;
KalturaFileSyncType.LINK = 2;
KalturaFileSyncType.URL = 3;

function KalturaFlavorAssetStatus(){
}
KalturaFlavorAssetStatus.CONVERTING = 1;
KalturaFlavorAssetStatus.NOT_APPLICABLE = 4;
KalturaFlavorAssetStatus.TEMP = 5;
KalturaFlavorAssetStatus.WAIT_FOR_CONVERT = 6;
KalturaFlavorAssetStatus.VALIDATING = 8;
KalturaFlavorAssetStatus.ERROR = -1;
KalturaFlavorAssetStatus.QUEUED = 0;
KalturaFlavorAssetStatus.READY = 2;
KalturaFlavorAssetStatus.DELETED = 3;
KalturaFlavorAssetStatus.IMPORTING = 7;
KalturaFlavorAssetStatus.EXPORTING = 9;

function KalturaFlavorReadyBehaviorType(){
}
KalturaFlavorReadyBehaviorType.NO_IMPACT = 0;
KalturaFlavorReadyBehaviorType.REQUIRED = 1;
KalturaFlavorReadyBehaviorType.OPTIONAL = 2;
KalturaFlavorReadyBehaviorType.INHERIT_FLAVOR_PARAMS = 0;

function KalturaGender(){
}
KalturaGender.UNKNOWN = 0;
KalturaGender.MALE = 1;
KalturaGender.FEMALE = 2;

function KalturaGenericDistributionProviderParser(){
}
KalturaGenericDistributionProviderParser.XSL = 1;
KalturaGenericDistributionProviderParser.XPATH = 2;
KalturaGenericDistributionProviderParser.REGEX = 3;

function KalturaGenericDistributionProviderStatus(){
}
KalturaGenericDistributionProviderStatus.ACTIVE = 2;
KalturaGenericDistributionProviderStatus.DELETED = 3;

function KalturaInheritanceType(){
}
KalturaInheritanceType.INHERIT = 1;
KalturaInheritanceType.MANUAL = 2;

function KalturaIpAddressRestrictionType(){
}
KalturaIpAddressRestrictionType.RESTRICT_LIST = 0;
KalturaIpAddressRestrictionType.ALLOW_LIST = 1;

function KalturaLicenseType(){
}
KalturaLicenseType.UNKNOWN = -1;
KalturaLicenseType.NONE = 0;
KalturaLicenseType.COPYRIGHTED = 1;
KalturaLicenseType.PUBLIC_DOMAIN = 2;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION = 3;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_SHARE_ALIKE = 4;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_NO_DERIVATIVES = 5;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL = 6;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL_SHARE_ALIKE = 7;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL_NO_DERIVATIVES = 8;
KalturaLicenseType.GFDL = 9;
KalturaLicenseType.GPL = 10;
KalturaLicenseType.AFFERO_GPL = 11;
KalturaLicenseType.LGPL = 12;
KalturaLicenseType.BSD = 13;
KalturaLicenseType.APACHE = 14;
KalturaLicenseType.MOZILLA = 15;

function KalturaMailJobStatus(){
}
KalturaMailJobStatus.PENDING = 1;
KalturaMailJobStatus.SENT = 2;
KalturaMailJobStatus.ERROR = 3;
KalturaMailJobStatus.QUEUED = 4;

function KalturaMediaType(){
}
KalturaMediaType.VIDEO = 1;
KalturaMediaType.IMAGE = 2;
KalturaMediaType.AUDIO = 5;
KalturaMediaType.LIVE_STREAM_FLASH = 201;
KalturaMediaType.LIVE_STREAM_WINDOWS_MEDIA = 202;
KalturaMediaType.LIVE_STREAM_REAL_MEDIA = 203;
KalturaMediaType.LIVE_STREAM_QUICKTIME = 204;

function KalturaMetadataProfileCreateMode(){
}
KalturaMetadataProfileCreateMode.API = 1;
KalturaMetadataProfileCreateMode.KMC = 2;
KalturaMetadataProfileCreateMode.APP = 3;

function KalturaMetadataProfileStatus(){
}
KalturaMetadataProfileStatus.ACTIVE = 1;
KalturaMetadataProfileStatus.DEPRECATED = 2;
KalturaMetadataProfileStatus.TRANSFORMING = 3;

function KalturaMetadataStatus(){
}
KalturaMetadataStatus.VALID = 1;
KalturaMetadataStatus.INVALID = 2;
KalturaMetadataStatus.DELETED = 3;

function KalturaModerationFlagStatus(){
}
KalturaModerationFlagStatus.PENDING = 1;
KalturaModerationFlagStatus.MODERATED = 2;

function KalturaModerationFlagType(){
}
KalturaModerationFlagType.SEXUAL_CONTENT = 1;
KalturaModerationFlagType.VIOLENT_REPULSIVE = 2;
KalturaModerationFlagType.HARMFUL_DANGEROUS = 3;
KalturaModerationFlagType.SPAM_COMMERCIALS = 4;
KalturaModerationFlagType.COPYRIGHT = 5;
KalturaModerationFlagType.TERMS_OF_USE_VIOLATION = 6;

function KalturaModerationObjectType(){
}
KalturaModerationObjectType.ENTRY = 2;
KalturaModerationObjectType.USER = 3;

function KalturaNotificationObjectType(){
}
KalturaNotificationObjectType.ENTRY = 1;
KalturaNotificationObjectType.KSHOW = 2;
KalturaNotificationObjectType.USER = 3;
KalturaNotificationObjectType.BATCH_JOB = 4;

function KalturaNotificationStatus(){
}
KalturaNotificationStatus.PENDING = 1;
KalturaNotificationStatus.SENT = 2;
KalturaNotificationStatus.ERROR = 3;
KalturaNotificationStatus.SHOULD_RESEND = 4;
KalturaNotificationStatus.ERROR_RESENDING = 5;
KalturaNotificationStatus.SENT_SYNCH = 6;
KalturaNotificationStatus.QUEUED = 7;

function KalturaNotificationType(){
}
KalturaNotificationType.ENTRY_ADD = 1;
KalturaNotificationType.ENTR_UPDATE_PERMISSIONS = 2;
KalturaNotificationType.ENTRY_DELETE = 3;
KalturaNotificationType.ENTRY_BLOCK = 4;
KalturaNotificationType.ENTRY_UPDATE = 5;
KalturaNotificationType.ENTRY_UPDATE_THUMBNAIL = 6;
KalturaNotificationType.ENTRY_UPDATE_MODERATION = 7;
KalturaNotificationType.USER_ADD = 21;
KalturaNotificationType.USER_BANNED = 26;

function KalturaNullableBoolean(){
}
KalturaNullableBoolean.NULL_VALUE = -1;
KalturaNullableBoolean.FALSE_VALUE = 0;
KalturaNullableBoolean.TRUE_VALUE = 1;

function KalturaPartnerGroupType(){
}
KalturaPartnerGroupType.PUBLISHER = 1;
KalturaPartnerGroupType.VAR_GROUP = 2;
KalturaPartnerGroupType.GROUP = 3;
KalturaPartnerGroupType.TEMPLATE = 4;

function KalturaPartnerStatus(){
}
KalturaPartnerStatus.ACTIVE = 1;
KalturaPartnerStatus.BLOCKED = 2;
KalturaPartnerStatus.FULL_BLOCK = 3;

function KalturaPartnerType(){
}
KalturaPartnerType.KMC = 1;
KalturaPartnerType.WIKI = 100;
KalturaPartnerType.WORDPRESS = 101;
KalturaPartnerType.DRUPAL = 102;
KalturaPartnerType.DEKIWIKI = 103;
KalturaPartnerType.MOODLE = 104;
KalturaPartnerType.COMMUNITY_EDITION = 105;
KalturaPartnerType.JOOMLA = 106;
KalturaPartnerType.BLACKBOARD = 107;
KalturaPartnerType.SAKAI = 108;
KalturaPartnerType.ADMIN_CONSOLE = 109;

function KalturaPermissionStatus(){
}
KalturaPermissionStatus.ACTIVE = 1;
KalturaPermissionStatus.BLOCKED = 2;
KalturaPermissionStatus.DELETED = 3;

function KalturaPermissionType(){
}
KalturaPermissionType.NORMAL = 1;
KalturaPermissionType.SPECIAL_FEATURE = 2;
KalturaPermissionType.PLUGIN = 3;
KalturaPermissionType.PARTNER_GROUP = 4;

function KalturaPlaylistType(){
}
KalturaPlaylistType.DYNAMIC = 10;
KalturaPlaylistType.STATIC_LIST = 3;
KalturaPlaylistType.EXTERNAL = 101;

function KalturaPrivacyType(){
}
KalturaPrivacyType.ALL = 1;
KalturaPrivacyType.AUTHENTICATED_USERS = 2;
KalturaPrivacyType.MEMBERS_ONLY = 3;

function KalturaReportType(){
}
KalturaReportType.TOP_CONTENT = 1;
KalturaReportType.CONTENT_DROPOFF = 2;
KalturaReportType.CONTENT_INTERACTIONS = 3;
KalturaReportType.MAP_OVERLAY = 4;
KalturaReportType.TOP_CONTRIBUTORS = 5;
KalturaReportType.TOP_SYNDICATION = 6;
KalturaReportType.CONTENT_CONTRIBUTIONS = 7;
KalturaReportType.WIDGETS_STATS = 8;
KalturaReportType.USER_ENGAGEMENT = 11;
KalturaReportType.SPEFICIC_USER_ENGAGEMENT = 12;
KalturaReportType.USER_TOP_CONTENT = 13;
KalturaReportType.USER_CONTENT_DROPOFF = 14;
KalturaReportType.USER_CONTENT_INTERACTIONS = 15;
KalturaReportType.APPLICATIONS = 16;
KalturaReportType.USER_USAGE = 17;
KalturaReportType.SPECIFIC_USER_USAGE = 18;
KalturaReportType.PARTNER_USAGE = 201;
KalturaReportType.VAR_USAGE = 19;

function KalturaSearchOperatorType(){
}
KalturaSearchOperatorType.SEARCH_AND = 1;
KalturaSearchOperatorType.SEARCH_OR = 2;

function KalturaSearchProviderType(){
}
KalturaSearchProviderType.FLICKR = 3;
KalturaSearchProviderType.YOUTUBE = 4;
KalturaSearchProviderType.MYSPACE = 7;
KalturaSearchProviderType.PHOTOBUCKET = 8;
KalturaSearchProviderType.JAMENDO = 9;
KalturaSearchProviderType.CCMIXTER = 10;
KalturaSearchProviderType.NYPL = 11;
KalturaSearchProviderType.CURRENT = 12;
KalturaSearchProviderType.MEDIA_COMMONS = 13;
KalturaSearchProviderType.KALTURA = 20;
KalturaSearchProviderType.KALTURA_USER_CLIPS = 21;
KalturaSearchProviderType.ARCHIVE_ORG = 22;
KalturaSearchProviderType.KALTURA_PARTNER = 23;
KalturaSearchProviderType.METACAFE = 24;
KalturaSearchProviderType.SEARCH_PROXY = 28;
KalturaSearchProviderType.PARTNER_SPECIFIC = 100;

function KalturaSessionType(){
}
KalturaSessionType.USER = 0;
KalturaSessionType.ADMIN = 2;

function KalturaShortLinkStatus(){
}
KalturaShortLinkStatus.DISABLED = 1;
KalturaShortLinkStatus.ENABLED = 2;
KalturaShortLinkStatus.DELETED = 3;

function KalturaSiteRestrictionType(){
}
KalturaSiteRestrictionType.RESTRICT_SITE_LIST = 0;
KalturaSiteRestrictionType.ALLOW_SITE_LIST = 1;

function KalturaStatsEventType(){
}
KalturaStatsEventType.WIDGET_LOADED = 1;
KalturaStatsEventType.MEDIA_LOADED = 2;
KalturaStatsEventType.PLAY = 3;
KalturaStatsEventType.PLAY_REACHED_25 = 4;
KalturaStatsEventType.PLAY_REACHED_50 = 5;
KalturaStatsEventType.PLAY_REACHED_75 = 6;
KalturaStatsEventType.PLAY_REACHED_100 = 7;
KalturaStatsEventType.OPEN_EDIT = 8;
KalturaStatsEventType.OPEN_VIRAL = 9;
KalturaStatsEventType.OPEN_DOWNLOAD = 10;
KalturaStatsEventType.OPEN_REPORT = 11;
KalturaStatsEventType.BUFFER_START = 12;
KalturaStatsEventType.BUFFER_END = 13;
KalturaStatsEventType.OPEN_FULL_SCREEN = 14;
KalturaStatsEventType.CLOSE_FULL_SCREEN = 15;
KalturaStatsEventType.REPLAY = 16;
KalturaStatsEventType.SEEK = 17;
KalturaStatsEventType.OPEN_UPLOAD = 18;
KalturaStatsEventType.SAVE_PUBLISH = 19;
KalturaStatsEventType.CLOSE_EDITOR = 20;
KalturaStatsEventType.PRE_BUMPER_PLAYED = 21;
KalturaStatsEventType.POST_BUMPER_PLAYED = 22;
KalturaStatsEventType.BUMPER_CLICKED = 23;
KalturaStatsEventType.PREROLL_STARTED = 24;
KalturaStatsEventType.MIDROLL_STARTED = 25;
KalturaStatsEventType.POSTROLL_STARTED = 26;
KalturaStatsEventType.OVERLAY_STARTED = 27;
KalturaStatsEventType.PREROLL_CLICKED = 28;
KalturaStatsEventType.MIDROLL_CLICKED = 29;
KalturaStatsEventType.POSTROLL_CLICKED = 30;
KalturaStatsEventType.OVERLAY_CLICKED = 31;
KalturaStatsEventType.PREROLL_25 = 32;
KalturaStatsEventType.PREROLL_50 = 33;
KalturaStatsEventType.PREROLL_75 = 34;
KalturaStatsEventType.MIDROLL_25 = 35;
KalturaStatsEventType.MIDROLL_50 = 36;
KalturaStatsEventType.MIDROLL_75 = 37;
KalturaStatsEventType.POSTROLL_25 = 38;
KalturaStatsEventType.POSTROLL_50 = 39;
KalturaStatsEventType.POSTROLL_75 = 40;

function KalturaStatsFeatureType(){
}
KalturaStatsFeatureType.NONE = 0;
KalturaStatsFeatureType.RELATED = 1;

function KalturaStatsKmcEventType(){
}
KalturaStatsKmcEventType.CONTENT_PAGE_VIEW = 1001;
KalturaStatsKmcEventType.CONTENT_ADD_PLAYLIST = 1010;
KalturaStatsKmcEventType.CONTENT_EDIT_PLAYLIST = 1011;
KalturaStatsKmcEventType.CONTENT_DELETE_PLAYLIST = 1012;
KalturaStatsKmcEventType.CONTENT_DELETE_ITEM = 1058;
KalturaStatsKmcEventType.CONTENT_DELETE_MIX = 1059;
KalturaStatsKmcEventType.CONTENT_EDIT_ENTRY = 1013;
KalturaStatsKmcEventType.CONTENT_CHANGE_THUMBNAIL = 1014;
KalturaStatsKmcEventType.CONTENT_ADD_TAGS = 1015;
KalturaStatsKmcEventType.CONTENT_REMOVE_TAGS = 1016;
KalturaStatsKmcEventType.CONTENT_ADD_ADMIN_TAGS = 1017;
KalturaStatsKmcEventType.CONTENT_REMOVE_ADMIN_TAGS = 1018;
KalturaStatsKmcEventType.CONTENT_DOWNLOAD = 1019;
KalturaStatsKmcEventType.CONTENT_APPROVE_MODERATION = 1020;
KalturaStatsKmcEventType.CONTENT_REJECT_MODERATION = 1021;
KalturaStatsKmcEventType.CONTENT_BULK_UPLOAD = 1022;
KalturaStatsKmcEventType.CONTENT_ADMIN_KCW_UPLOAD = 1023;
KalturaStatsKmcEventType.CONTENT_CONTENT_GO_TO_PAGE = 1057;
KalturaStatsKmcEventType.CONTENT_ENTRY_DRILLDOWN = 1088;
KalturaStatsKmcEventType.CONTENT_OPEN_PREVIEW_AND_EMBED = 1089;
KalturaStatsKmcEventType.ACCOUNT_CHANGE_PARTNER_INFO = 1030;
KalturaStatsKmcEventType.ACCOUNT_CHANGE_LOGIN_INFO = 1031;
KalturaStatsKmcEventType.ACCOUNT_CONTACT_US_USAGE = 1032;
KalturaStatsKmcEventType.ACCOUNT_UPDATE_SERVER_SETTINGS = 1033;
KalturaStatsKmcEventType.ACCOUNT_ACCOUNT_OVERVIEW = 1034;
KalturaStatsKmcEventType.ACCOUNT_ACCESS_CONTROL = 1035;
KalturaStatsKmcEventType.ACCOUNT_TRANSCODING_SETTINGS = 1036;
KalturaStatsKmcEventType.ACCOUNT_ACCOUNT_UPGRADE = 1037;
KalturaStatsKmcEventType.ACCOUNT_SAVE_SERVER_SETTINGS = 1038;
KalturaStatsKmcEventType.ACCOUNT_ACCESS_CONTROL_DELETE = 1039;
KalturaStatsKmcEventType.ACCOUNT_SAVE_TRANSCODING_SETTINGS = 1040;
KalturaStatsKmcEventType.LOGIN = 1041;
KalturaStatsKmcEventType.DASHBOARD_IMPORT_CONTENT = 1042;
KalturaStatsKmcEventType.DASHBOARD_UPDATE_CONTENT = 1043;
KalturaStatsKmcEventType.DASHBOARD_ACCOUNT_CONTACT_US = 1044;
KalturaStatsKmcEventType.DASHBOARD_VIEW_REPORTS = 1045;
KalturaStatsKmcEventType.DASHBOARD_EMBED_PLAYER = 1046;
KalturaStatsKmcEventType.DASHBOARD_EMBED_PLAYLIST = 1047;
KalturaStatsKmcEventType.DASHBOARD_CUSTOMIZE_PLAYERS = 1048;
KalturaStatsKmcEventType.APP_STUDIO_NEW_PLAYER_SINGLE_VIDEO = 1050;
KalturaStatsKmcEventType.APP_STUDIO_NEW_PLAYER_PLAYLIST = 1051;
KalturaStatsKmcEventType.APP_STUDIO_NEW_PLAYER_MULTI_TAB_PLAYLIST = 1052;
KalturaStatsKmcEventType.APP_STUDIO_EDIT_PLAYER_SINGLE_VIDEO = 1053;
KalturaStatsKmcEventType.APP_STUDIO_EDIT_PLAYER_PLAYLIST = 1054;
KalturaStatsKmcEventType.APP_STUDIO_EDIT_PLAYER_MULTI_TAB_PLAYLIST = 1055;
KalturaStatsKmcEventType.APP_STUDIO_DUPLICATE_PLAYER = 1056;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_BANDWIDTH_USAGE_TAB = 1070;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_REPORTS_TAB = 1071;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_USERS_AND_COMMUNITY_REPORTS_TAB = 1072;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_TOP_CONTRIBUTORS = 1073;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_MAP_OVERLAYS = 1074;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_TOP_SYNDICATIONS = 1075;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_TOP_CONTENT = 1076;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_DROPOFF = 1077;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_INTERACTIONS = 1078;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_CONTRIBUTIONS = 1079;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_VIDEO_DRILL_DOWN = 1080;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_DRILL_DOWN_INTERACTION = 1081;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_CONTRIBUTIONS_DRILLDOWN = 1082;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_VIDEO_DRILL_DOWN_DROPOFF = 1083;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_MAP_OVERLAYS_DRILLDOWN = 1084;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_TOP_SYNDICATIONS_DRILL_DOWN = 1085;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_BANDWIDTH_USAGE_VIEW_MONTHLY = 1086;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_BANDWIDTH_USAGE_VIEW_YEARLY = 1087;

function KalturaStorageProfileDeliveryStatus(){
}
KalturaStorageProfileDeliveryStatus.ACTIVE = 1;
KalturaStorageProfileDeliveryStatus.BLOCKED = 2;

function KalturaStorageProfileProtocol(){
}
KalturaStorageProfileProtocol.KALTURA_DC = 0;
KalturaStorageProfileProtocol.FTP = 1;
KalturaStorageProfileProtocol.SCP = 2;
KalturaStorageProfileProtocol.SFTP = 3;
KalturaStorageProfileProtocol.S3 = 6;

function KalturaStorageProfileReadyBehavior(){
}
KalturaStorageProfileReadyBehavior.NO_IMPACT = 0;
KalturaStorageProfileReadyBehavior.REQUIRED = 1;

function KalturaStorageProfileStatus(){
}
KalturaStorageProfileStatus.DISABLED = 1;
KalturaStorageProfileStatus.AUTOMATIC = 2;
KalturaStorageProfileStatus.MANUAL = 3;

function KalturaStorageServePriority(){
}
KalturaStorageServePriority.KALTURA_ONLY = 1;
KalturaStorageServePriority.KALTURA_FIRST = 2;
KalturaStorageServePriority.EXTERNAL_FIRST = 3;
KalturaStorageServePriority.EXTERNAL_ONLY = 4;

function KalturaSyndicationFeedStatus(){
}
KalturaSyndicationFeedStatus.DELETED = -1;
KalturaSyndicationFeedStatus.ACTIVE = 1;

function KalturaSyndicationFeedType(){
}
KalturaSyndicationFeedType.GOOGLE_VIDEO = 1;
KalturaSyndicationFeedType.YAHOO = 2;
KalturaSyndicationFeedType.ITUNES = 3;
KalturaSyndicationFeedType.TUBE_MOGUL = 4;
KalturaSyndicationFeedType.KALTURA = 5;
KalturaSyndicationFeedType.KALTURA_XSLT = 6;

function KalturaThumbAssetStatus(){
}
KalturaThumbAssetStatus.CAPTURING = 1;
KalturaThumbAssetStatus.ERROR = -1;
KalturaThumbAssetStatus.QUEUED = 0;
KalturaThumbAssetStatus.READY = 2;
KalturaThumbAssetStatus.DELETED = 3;
KalturaThumbAssetStatus.IMPORTING = 7;
KalturaThumbAssetStatus.EXPORTING = 9;

function KalturaThumbCropType(){
}
KalturaThumbCropType.RESIZE = 1;
KalturaThumbCropType.RESIZE_WITH_PADDING = 2;
KalturaThumbCropType.CROP = 3;
KalturaThumbCropType.CROP_FROM_TOP = 4;
KalturaThumbCropType.RESIZE_WITH_FORCE = 5;

function KalturaTrackEntryEventType(){
}
KalturaTrackEntryEventType.UPLOADED_FILE = 1;
KalturaTrackEntryEventType.WEBCAM_COMPLETED = 2;
KalturaTrackEntryEventType.IMPORT_STARTED = 3;
KalturaTrackEntryEventType.ADD_ENTRY = 4;
KalturaTrackEntryEventType.UPDATE_ENTRY = 5;
KalturaTrackEntryEventType.DELETED_ENTRY = 6;

function KalturaUiConfCreationMode(){
}
KalturaUiConfCreationMode.WIZARD = 2;
KalturaUiConfCreationMode.ADVANCED = 3;

function KalturaUiConfObjType(){
}
KalturaUiConfObjType.PLAYER = 1;
KalturaUiConfObjType.CONTRIBUTION_WIZARD = 2;
KalturaUiConfObjType.SIMPLE_EDITOR = 3;
KalturaUiConfObjType.ADVANCED_EDITOR = 4;
KalturaUiConfObjType.PLAYLIST = 5;
KalturaUiConfObjType.APP_STUDIO = 6;
KalturaUiConfObjType.KRECORD = 7;
KalturaUiConfObjType.PLAYER_V3 = 8;
KalturaUiConfObjType.KMC_ACCOUNT = 9;
KalturaUiConfObjType.KMC_ANALYTICS = 10;
KalturaUiConfObjType.KMC_CONTENT = 11;
KalturaUiConfObjType.KMC_DASHBOARD = 12;
KalturaUiConfObjType.KMC_LOGIN = 13;
KalturaUiConfObjType.PLAYER_SL = 14;
KalturaUiConfObjType.CLIENTSIDE_ENCODER = 15;
KalturaUiConfObjType.KMC_GENERAL = 16;
KalturaUiConfObjType.KMC_ROLES_AND_PERMISSIONS = 17;
KalturaUiConfObjType.CLIPPER = 18;

function KalturaUpdateMethodType(){
}
KalturaUpdateMethodType.MANUAL = 0;
KalturaUpdateMethodType.AUTOMATIC = 1;

function KalturaUploadErrorCode(){
}
KalturaUploadErrorCode.NO_ERROR = 0;
KalturaUploadErrorCode.GENERAL_ERROR = 1;
KalturaUploadErrorCode.PARTIAL_UPLOAD = 2;

function KalturaUploadTokenStatus(){
}
KalturaUploadTokenStatus.PENDING = 0;
KalturaUploadTokenStatus.PARTIAL_UPLOAD = 1;
KalturaUploadTokenStatus.FULL_UPLOAD = 2;
KalturaUploadTokenStatus.CLOSED = 3;
KalturaUploadTokenStatus.TIMED_OUT = 4;
KalturaUploadTokenStatus.DELETED = 5;

function KalturaUserAgentRestrictionType(){
}
KalturaUserAgentRestrictionType.RESTRICT_LIST = 0;
KalturaUserAgentRestrictionType.ALLOW_LIST = 1;

function KalturaUserJoinPolicyType(){
}
KalturaUserJoinPolicyType.AUTO_JOIN = 1;
KalturaUserJoinPolicyType.REQUEST_TO_JOIN = 2;
KalturaUserJoinPolicyType.NOT_ALLOWED = 3;

function KalturaUserRoleStatus(){
}
KalturaUserRoleStatus.ACTIVE = 1;
KalturaUserRoleStatus.BLOCKED = 2;
KalturaUserRoleStatus.DELETED = 3;

function KalturaUserStatus(){
}
KalturaUserStatus.BLOCKED = 0;
KalturaUserStatus.ACTIVE = 1;
KalturaUserStatus.DELETED = 2;

function KalturaVirusFoundAction(){
}
KalturaVirusFoundAction.NONE = 0;
KalturaVirusFoundAction.DELETE = 1;
KalturaVirusFoundAction.CLEAN_NONE = 2;
KalturaVirusFoundAction.CLEAN_DELETE = 3;

function KalturaVirusScanJobResult(){
}
KalturaVirusScanJobResult.SCAN_ERROR = 1;
KalturaVirusScanJobResult.FILE_IS_CLEAN = 2;
KalturaVirusScanJobResult.FILE_WAS_CLEANED = 3;
KalturaVirusScanJobResult.FILE_INFECTED = 4;

function KalturaVirusScanProfileStatus(){
}
KalturaVirusScanProfileStatus.DISABLED = 1;
KalturaVirusScanProfileStatus.ENABLED = 2;
KalturaVirusScanProfileStatus.DELETED = 3;

function KalturaWidgetSecurityType(){
}
KalturaWidgetSecurityType.NONE = 1;
KalturaWidgetSecurityType.TIMEHASH = 2;

function KalturaAccessControlActionType(){
}
KalturaAccessControlActionType.BLOCK = "1";
KalturaAccessControlActionType.PREVIEW = "2";

function KalturaAccessControlContextType(){
}
KalturaAccessControlContextType.PLAY = "1";
KalturaAccessControlContextType.DOWNLOAD = "2";
KalturaAccessControlContextType.THUMBNAIL = "3";

function KalturaAccessControlOrderBy(){
}
KalturaAccessControlOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAccessControlOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaAccessControlProfileOrderBy(){
}
KalturaAccessControlProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAccessControlProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaAccessControlProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaAccessControlProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaAdCuePointOrderBy(){
}
KalturaAdCuePointOrderBy.END_TIME_ASC = "+endTime";
KalturaAdCuePointOrderBy.END_TIME_DESC = "-endTime";
KalturaAdCuePointOrderBy.DURATION_ASC = "+duration";
KalturaAdCuePointOrderBy.DURATION_DESC = "-duration";
KalturaAdCuePointOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAdCuePointOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaAdCuePointOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaAdCuePointOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaAdCuePointOrderBy.START_TIME_ASC = "+startTime";
KalturaAdCuePointOrderBy.START_TIME_DESC = "-startTime";
KalturaAdCuePointOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaAdCuePointOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";

function KalturaAdProtocolType(){
}
KalturaAdProtocolType.CUSTOM = "0";
KalturaAdProtocolType.VAST = "1";
KalturaAdProtocolType.VAST_2_0 = "2";
KalturaAdProtocolType.VPAID = "3";

function KalturaAdType(){
}
KalturaAdType.VIDEO = "1";
KalturaAdType.OVERLAY = "2";

function KalturaAdminUserOrderBy(){
}
KalturaAdminUserOrderBy.ID_ASC = "+id";
KalturaAdminUserOrderBy.ID_DESC = "-id";
KalturaAdminUserOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAdminUserOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaAnnotationOrderBy(){
}
KalturaAnnotationOrderBy.END_TIME_ASC = "+endTime";
KalturaAnnotationOrderBy.END_TIME_DESC = "-endTime";
KalturaAnnotationOrderBy.DURATION_ASC = "+duration";
KalturaAnnotationOrderBy.DURATION_DESC = "-duration";
KalturaAnnotationOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAnnotationOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaAnnotationOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaAnnotationOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaAnnotationOrderBy.START_TIME_ASC = "+startTime";
KalturaAnnotationOrderBy.START_TIME_DESC = "-startTime";
KalturaAnnotationOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaAnnotationOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";

function KalturaApiActionPermissionItemOrderBy(){
}
KalturaApiActionPermissionItemOrderBy.ID_ASC = "+id";
KalturaApiActionPermissionItemOrderBy.ID_DESC = "-id";
KalturaApiActionPermissionItemOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaApiActionPermissionItemOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaApiActionPermissionItemOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaApiActionPermissionItemOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaApiParameterPermissionItemAction(){
}
KalturaApiParameterPermissionItemAction.READ = "read";
KalturaApiParameterPermissionItemAction.UPDATE = "update";
KalturaApiParameterPermissionItemAction.INSERT = "insert";
KalturaApiParameterPermissionItemAction.USAGE = "all";

function KalturaApiParameterPermissionItemOrderBy(){
}
KalturaApiParameterPermissionItemOrderBy.ID_ASC = "+id";
KalturaApiParameterPermissionItemOrderBy.ID_DESC = "-id";
KalturaApiParameterPermissionItemOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaApiParameterPermissionItemOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaApiParameterPermissionItemOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaApiParameterPermissionItemOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaAssetOrderBy(){
}
KalturaAssetOrderBy.SIZE_ASC = "+size";
KalturaAssetOrderBy.SIZE_DESC = "-size";
KalturaAssetOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAssetOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaAssetOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaAssetOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaAssetOrderBy.DELETED_AT_ASC = "+deletedAt";
KalturaAssetOrderBy.DELETED_AT_DESC = "-deletedAt";

function KalturaAssetParamsOrderBy(){
}

function KalturaAssetParamsOutputOrderBy(){
}

function KalturaAssetType(){
}
KalturaAssetType.FLAVOR = "1";
KalturaAssetType.THUMBNAIL = "2";
KalturaAssetType.DOCUMENT = "document.Document";
KalturaAssetType.SWF = "document.SWF";
KalturaAssetType.PDF = "document.PDF";
KalturaAssetType.IMAGE = "document.Image";
KalturaAssetType.CAPTION = "caption.Caption";
KalturaAssetType.ATTACHMENT = "attachment.Attachment";

function KalturaAttachmentAssetOrderBy(){
}
KalturaAttachmentAssetOrderBy.SIZE_ASC = "+size";
KalturaAttachmentAssetOrderBy.SIZE_DESC = "-size";
KalturaAttachmentAssetOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAttachmentAssetOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaAttachmentAssetOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaAttachmentAssetOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaAttachmentAssetOrderBy.DELETED_AT_ASC = "+deletedAt";
KalturaAttachmentAssetOrderBy.DELETED_AT_DESC = "-deletedAt";

function KalturaAttachmentType(){
}
KalturaAttachmentType.TEXT = "1";
KalturaAttachmentType.MEDIA = "2";
KalturaAttachmentType.DOCUMENT = "3";

function KalturaAudioCodec(){
}
KalturaAudioCodec.NONE = "";
KalturaAudioCodec.MP3 = "mp3";
KalturaAudioCodec.AAC = "aac";
KalturaAudioCodec.VORBIS = "vorbis";
KalturaAudioCodec.WMA = "wma";
KalturaAudioCodec.WMAPRO = "wmapro";
KalturaAudioCodec.AMRNB = "amrnb";
KalturaAudioCodec.MPEG2 = "mpeg2";
KalturaAudioCodec.AC3 = "ac3";
KalturaAudioCodec.COPY = "copy";

function KalturaAuditTrailAction(){
}
KalturaAuditTrailAction.CREATED = "CREATED";
KalturaAuditTrailAction.COPIED = "COPIED";
KalturaAuditTrailAction.CHANGED = "CHANGED";
KalturaAuditTrailAction.DELETED = "DELETED";
KalturaAuditTrailAction.VIEWED = "VIEWED";
KalturaAuditTrailAction.CONTENT_VIEWED = "CONTENT_VIEWED";
KalturaAuditTrailAction.FILE_SYNC_CREATED = "FILE_SYNC_CREATED";
KalturaAuditTrailAction.RELATION_ADDED = "RELATION_ADDED";
KalturaAuditTrailAction.RELATION_REMOVED = "RELATION_REMOVED";

function KalturaAuditTrailObjectType(){
}
KalturaAuditTrailObjectType.ACCESS_CONTROL = "accessControl";
KalturaAuditTrailObjectType.ADMIN_KUSER = "adminKuser";
KalturaAuditTrailObjectType.BATCH_JOB = "BatchJob";
KalturaAuditTrailObjectType.CATEGORY = "category";
KalturaAuditTrailObjectType.CONVERSION_PROFILE_2 = "conversionProfile2";
KalturaAuditTrailObjectType.EMAIL_INGESTION_PROFILE = "EmailIngestionProfile";
KalturaAuditTrailObjectType.ENTRY = "entry";
KalturaAuditTrailObjectType.FILE_SYNC = "FileSync";
KalturaAuditTrailObjectType.FLAVOR_ASSET = "flavorAsset";
KalturaAuditTrailObjectType.THUMBNAIL_ASSET = "thumbAsset";
KalturaAuditTrailObjectType.FLAVOR_PARAMS = "flavorParams";
KalturaAuditTrailObjectType.THUMBNAIL_PARAMS = "thumbParams";
KalturaAuditTrailObjectType.FLAVOR_PARAMS_CONVERSION_PROFILE = "flavorParamsConversionProfile";
KalturaAuditTrailObjectType.FLAVOR_PARAMS_OUTPUT = "flavorParamsOutput";
KalturaAuditTrailObjectType.THUMBNAIL_PARAMS_OUTPUT = "thumbParamsOutput";
KalturaAuditTrailObjectType.KSHOW = "kshow";
KalturaAuditTrailObjectType.KSHOW_KUSER = "KshowKuser";
KalturaAuditTrailObjectType.KUSER = "kuser";
KalturaAuditTrailObjectType.MEDIA_INFO = "mediaInfo";
KalturaAuditTrailObjectType.MODERATION = "moderation";
KalturaAuditTrailObjectType.PARTNER = "Partner";
KalturaAuditTrailObjectType.ROUGHCUT = "roughcutEntry";
KalturaAuditTrailObjectType.SYNDICATION = "syndicationFeed";
KalturaAuditTrailObjectType.UI_CONF = "uiConf";
KalturaAuditTrailObjectType.UPLOAD_TOKEN = "UploadToken";
KalturaAuditTrailObjectType.WIDGET = "widget";
KalturaAuditTrailObjectType.METADATA = "Metadata";
KalturaAuditTrailObjectType.METADATA_PROFILE = "MetadataProfile";
KalturaAuditTrailObjectType.USER_LOGIN_DATA = "UserLoginData";
KalturaAuditTrailObjectType.USER_ROLE = "UserRole";
KalturaAuditTrailObjectType.PERMISSION = "Permission";

function KalturaAuditTrailOrderBy(){
}
KalturaAuditTrailOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAuditTrailOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaAuditTrailOrderBy.PARSED_AT_ASC = "+parsedAt";
KalturaAuditTrailOrderBy.PARSED_AT_DESC = "-parsedAt";

function KalturaBaseEntryOrderBy(){
}
KalturaBaseEntryOrderBy.NAME_ASC = "+name";
KalturaBaseEntryOrderBy.NAME_DESC = "-name";
KalturaBaseEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaBaseEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaBaseEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaBaseEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaBaseEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaBaseEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaBaseEntryOrderBy.RANK_ASC = "+rank";
KalturaBaseEntryOrderBy.RANK_DESC = "-rank";
KalturaBaseEntryOrderBy.TOTAL_RANK_ASC = "+totalRank";
KalturaBaseEntryOrderBy.TOTAL_RANK_DESC = "-totalRank";
KalturaBaseEntryOrderBy.START_DATE_ASC = "+startDate";
KalturaBaseEntryOrderBy.START_DATE_DESC = "-startDate";
KalturaBaseEntryOrderBy.END_DATE_ASC = "+endDate";
KalturaBaseEntryOrderBy.END_DATE_DESC = "-endDate";
KalturaBaseEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaBaseEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaBaseEntryOrderBy.RECENT_ASC = "+recent";
KalturaBaseEntryOrderBy.RECENT_DESC = "-recent";
KalturaBaseEntryOrderBy.WEIGHT_ASC = "+weight";
KalturaBaseEntryOrderBy.WEIGHT_DESC = "-weight";

function KalturaBaseJobOrderBy(){
}
KalturaBaseJobOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaBaseJobOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaBaseJobOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaBaseJobOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaBaseJobOrderBy.PROCESSOR_EXPIRATION_ASC = "+processorExpiration";
KalturaBaseJobOrderBy.PROCESSOR_EXPIRATION_DESC = "-processorExpiration";
KalturaBaseJobOrderBy.EXECUTION_ATTEMPTS_ASC = "+executionAttempts";
KalturaBaseJobOrderBy.EXECUTION_ATTEMPTS_DESC = "-executionAttempts";
KalturaBaseJobOrderBy.LOCK_VERSION_ASC = "+lockVersion";
KalturaBaseJobOrderBy.LOCK_VERSION_DESC = "-lockVersion";

function KalturaBaseSyndicationFeedOrderBy(){
}
KalturaBaseSyndicationFeedOrderBy.PLAYLIST_ID_ASC = "+playlistId";
KalturaBaseSyndicationFeedOrderBy.PLAYLIST_ID_DESC = "-playlistId";
KalturaBaseSyndicationFeedOrderBy.NAME_ASC = "+name";
KalturaBaseSyndicationFeedOrderBy.NAME_DESC = "-name";
KalturaBaseSyndicationFeedOrderBy.TYPE_ASC = "+type";
KalturaBaseSyndicationFeedOrderBy.TYPE_DESC = "-type";
KalturaBaseSyndicationFeedOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaBaseSyndicationFeedOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaBaseSyndicationFeedOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaBaseSyndicationFeedOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaBatchJobOrderBy(){
}
KalturaBatchJobOrderBy.STATUS_ASC = "+status";
KalturaBatchJobOrderBy.STATUS_DESC = "-status";
KalturaBatchJobOrderBy.CHECK_AGAIN_TIMEOUT_ASC = "+checkAgainTimeout";
KalturaBatchJobOrderBy.CHECK_AGAIN_TIMEOUT_DESC = "-checkAgainTimeout";
KalturaBatchJobOrderBy.PROGRESS_ASC = "+progress";
KalturaBatchJobOrderBy.PROGRESS_DESC = "-progress";
KalturaBatchJobOrderBy.UPDATES_COUNT_ASC = "+updatesCount";
KalturaBatchJobOrderBy.UPDATES_COUNT_DESC = "-updatesCount";
KalturaBatchJobOrderBy.PRIORITY_ASC = "+priority";
KalturaBatchJobOrderBy.PRIORITY_DESC = "-priority";
KalturaBatchJobOrderBy.QUEUE_TIME_ASC = "+queueTime";
KalturaBatchJobOrderBy.QUEUE_TIME_DESC = "-queueTime";
KalturaBatchJobOrderBy.FINISH_TIME_ASC = "+finishTime";
KalturaBatchJobOrderBy.FINISH_TIME_DESC = "-finishTime";
KalturaBatchJobOrderBy.FILE_SIZE_ASC = "+fileSize";
KalturaBatchJobOrderBy.FILE_SIZE_DESC = "-fileSize";
KalturaBatchJobOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaBatchJobOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaBatchJobOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaBatchJobOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaBatchJobOrderBy.PROCESSOR_EXPIRATION_ASC = "+processorExpiration";
KalturaBatchJobOrderBy.PROCESSOR_EXPIRATION_DESC = "-processorExpiration";
KalturaBatchJobOrderBy.EXECUTION_ATTEMPTS_ASC = "+executionAttempts";
KalturaBatchJobOrderBy.EXECUTION_ATTEMPTS_DESC = "-executionAttempts";
KalturaBatchJobOrderBy.LOCK_VERSION_ASC = "+lockVersion";
KalturaBatchJobOrderBy.LOCK_VERSION_DESC = "-lockVersion";

function KalturaBatchJobType(){
}
KalturaBatchJobType.CONVERT = "0";
KalturaBatchJobType.IMPORT = "1";
KalturaBatchJobType.DELETE = "2";
KalturaBatchJobType.FLATTEN = "3";
KalturaBatchJobType.BULKUPLOAD = "4";
KalturaBatchJobType.DVDCREATOR = "5";
KalturaBatchJobType.DOWNLOAD = "6";
KalturaBatchJobType.OOCONVERT = "7";
KalturaBatchJobType.CONVERT_PROFILE = "10";
KalturaBatchJobType.POSTCONVERT = "11";
KalturaBatchJobType.EXTRACT_MEDIA = "14";
KalturaBatchJobType.MAIL = "15";
KalturaBatchJobType.NOTIFICATION = "16";
KalturaBatchJobType.CLEANUP = "17";
KalturaBatchJobType.SCHEDULER_HELPER = "18";
KalturaBatchJobType.BULKDOWNLOAD = "19";
KalturaBatchJobType.DB_CLEANUP = "20";
KalturaBatchJobType.PROVISION_PROVIDE = "21";
KalturaBatchJobType.CONVERT_COLLECTION = "22";
KalturaBatchJobType.STORAGE_EXPORT = "23";
KalturaBatchJobType.PROVISION_DELETE = "24";
KalturaBatchJobType.STORAGE_DELETE = "25";
KalturaBatchJobType.EMAIL_INGESTION = "26";
KalturaBatchJobType.METADATA_IMPORT = "27";
KalturaBatchJobType.METADATA_TRANSFORM = "28";
KalturaBatchJobType.FILESYNC_IMPORT = "29";
KalturaBatchJobType.CAPTURE_THUMB = "30";
KalturaBatchJobType.DELETE_FILE = "31";
KalturaBatchJobType.INDEX = "32";
KalturaBatchJobType.MOVE_CATEGORY_ENTRIES = "33";
KalturaBatchJobType.COPY = "34";
KalturaBatchJobType.VIRUS_SCAN = "virusScan.VirusScan";
KalturaBatchJobType.DISTRIBUTION_SUBMIT = "contentDistribution.DistributionSubmit";
KalturaBatchJobType.DISTRIBUTION_UPDATE = "contentDistribution.DistributionUpdate";
KalturaBatchJobType.DISTRIBUTION_DELETE = "contentDistribution.DistributionDelete";
KalturaBatchJobType.DISTRIBUTION_FETCH_REPORT = "contentDistribution.DistributionFetchReport";
KalturaBatchJobType.DISTRIBUTION_ENABLE = "contentDistribution.DistributionEnable";
KalturaBatchJobType.DISTRIBUTION_DISABLE = "contentDistribution.DistributionDisable";
KalturaBatchJobType.DISTRIBUTION_SYNC = "contentDistribution.DistributionSync";
KalturaBatchJobType.DROP_FOLDER_WATCHER = "dropFolder.DropFolderWatcher";
KalturaBatchJobType.DROP_FOLDER_HANDLER = "dropFolder.DropFolderHandler";
KalturaBatchJobType.PARSE_CAPTION_ASSET = "captionSearch.parseCaptionAsset";
KalturaBatchJobType.EVENT_NOTIFICATION_HANDLER = "eventNotification.EventNotificationHandler";

function KalturaBulkUploadAction(){
}
KalturaBulkUploadAction.ADD = "1";
KalturaBulkUploadAction.UPDATE = "2";
KalturaBulkUploadAction.DELETE = "3";
KalturaBulkUploadAction.REPLACE = "4";
KalturaBulkUploadAction.TRANSFORM_XSLT = "5";
KalturaBulkUploadAction.ADD_OR_UPDATE = "6";

function KalturaBulkUploadObjectType(){
}
KalturaBulkUploadObjectType.ENTRY = "1";
KalturaBulkUploadObjectType.CATEGORY = "2";
KalturaBulkUploadObjectType.USER = "3";
KalturaBulkUploadObjectType.CATEGORY_USER = "4";

function KalturaBulkUploadOrderBy(){
}

function KalturaBulkUploadResultObjectType(){
}
KalturaBulkUploadResultObjectType.ENTRY = "1";
KalturaBulkUploadResultObjectType.CATEGORY = "2";
KalturaBulkUploadResultObjectType.USER = "3";
KalturaBulkUploadResultObjectType.CATEGORY_USER = "4";

function KalturaBulkUploadResultStatus(){
}
KalturaBulkUploadResultStatus.ERROR = "1";
KalturaBulkUploadResultStatus.OK = "2";
KalturaBulkUploadResultStatus.IN_PROGRESS = "3";

function KalturaBulkUploadType(){
}
KalturaBulkUploadType.CSV = "bulkUploadCsv.CSV";
KalturaBulkUploadType.XML = "bulkUploadXml.XML";
KalturaBulkUploadType.DROP_FOLDER_XML = "dropFolderXmlBulkUpload.DROP_FOLDER_XML";

function KalturaCaptionAssetOrderBy(){
}
KalturaCaptionAssetOrderBy.SIZE_ASC = "+size";
KalturaCaptionAssetOrderBy.SIZE_DESC = "-size";
KalturaCaptionAssetOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaCaptionAssetOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaCaptionAssetOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaCaptionAssetOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaCaptionAssetOrderBy.DELETED_AT_ASC = "+deletedAt";
KalturaCaptionAssetOrderBy.DELETED_AT_DESC = "-deletedAt";

function KalturaCaptionParamsOrderBy(){
}

function KalturaCaptionType(){
}
KalturaCaptionType.SRT = "1";
KalturaCaptionType.DFXP = "2";

function KalturaCategoryEntryOrderBy(){
}
KalturaCategoryEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaCategoryEntryOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaCategoryOrderBy(){
}
KalturaCategoryOrderBy.DEPTH_ASC = "+depth";
KalturaCategoryOrderBy.DEPTH_DESC = "-depth";
KalturaCategoryOrderBy.NAME_ASC = "+name";
KalturaCategoryOrderBy.NAME_DESC = "-name";
KalturaCategoryOrderBy.FULL_NAME_ASC = "+fullName";
KalturaCategoryOrderBy.FULL_NAME_DESC = "-fullName";
KalturaCategoryOrderBy.ENTRIES_COUNT_ASC = "+entriesCount";
KalturaCategoryOrderBy.ENTRIES_COUNT_DESC = "-entriesCount";
KalturaCategoryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaCategoryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaCategoryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaCategoryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaCategoryOrderBy.DIRECT_ENTRIES_COUNT_ASC = "+directEntriesCount";
KalturaCategoryOrderBy.DIRECT_ENTRIES_COUNT_DESC = "-directEntriesCount";
KalturaCategoryOrderBy.MEMBERS_COUNT_ASC = "+membersCount";
KalturaCategoryOrderBy.MEMBERS_COUNT_DESC = "-membersCount";
KalturaCategoryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaCategoryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaCategoryOrderBy.DIRECT_SUB_CATEGORIES_COUNT_ASC = "+directSubCategoriesCount";
KalturaCategoryOrderBy.DIRECT_SUB_CATEGORIES_COUNT_DESC = "-directSubCategoriesCount";

function KalturaCategoryUserOrderBy(){
}
KalturaCategoryUserOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaCategoryUserOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaCategoryUserOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaCategoryUserOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaCodeCuePointOrderBy(){
}
KalturaCodeCuePointOrderBy.END_TIME_ASC = "+endTime";
KalturaCodeCuePointOrderBy.END_TIME_DESC = "-endTime";
KalturaCodeCuePointOrderBy.DURATION_ASC = "+duration";
KalturaCodeCuePointOrderBy.DURATION_DESC = "-duration";
KalturaCodeCuePointOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaCodeCuePointOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaCodeCuePointOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaCodeCuePointOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaCodeCuePointOrderBy.START_TIME_ASC = "+startTime";
KalturaCodeCuePointOrderBy.START_TIME_DESC = "-startTime";
KalturaCodeCuePointOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaCodeCuePointOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";

function KalturaConditionType(){
}
KalturaConditionType.AUTHENTICATED = "1";
KalturaConditionType.COUNTRY = "2";
KalturaConditionType.IP_ADDRESS = "3";
KalturaConditionType.SITE = "4";
KalturaConditionType.USER_AGENT = "5";
KalturaConditionType.FIELD_MATCH = "6";
KalturaConditionType.FIELD_COMPARE = "7";
KalturaConditionType.METADATA_FIELD_MATCH = "metadata.FieldMatch";
KalturaConditionType.METADATA_FIELD_COMPARE = "metadata.FieldCompare";

function KalturaConfigurableDistributionProfileOrderBy(){
}
KalturaConfigurableDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaConfigurableDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaConfigurableDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaConfigurableDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaContainerFormat(){
}
KalturaContainerFormat.FLV = "flv";
KalturaContainerFormat.MP4 = "mp4";
KalturaContainerFormat.AVI = "avi";
KalturaContainerFormat.MOV = "mov";
KalturaContainerFormat.MP3 = "mp3";
KalturaContainerFormat._3GP = "3gp";
KalturaContainerFormat.OGG = "ogg";
KalturaContainerFormat.WMV = "wmv";
KalturaContainerFormat.WMA = "wma";
KalturaContainerFormat.ISMV = "ismv";
KalturaContainerFormat.MKV = "mkv";
KalturaContainerFormat.WEBM = "webm";
KalturaContainerFormat.MPEG = "mpeg";
KalturaContainerFormat.MPEGTS = "mpegts";
KalturaContainerFormat.APPLEHTTP = "applehttp";
KalturaContainerFormat.SWF = "swf";
KalturaContainerFormat.PDF = "pdf";
KalturaContainerFormat.BMP = "bmp";
KalturaContainerFormat.PNG = "png";
KalturaContainerFormat.JPG = "jpg";

function KalturaControlPanelCommandOrderBy(){
}
KalturaControlPanelCommandOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaControlPanelCommandOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaControlPanelCommandOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaControlPanelCommandOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaConversionProfileAssetParamsOrderBy(){
}

function KalturaConversionProfileOrderBy(){
}
KalturaConversionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaConversionProfileOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaConversionProfileStatus(){
}
KalturaConversionProfileStatus.DISABLED = "1";
KalturaConversionProfileStatus.ENABLED = "2";
KalturaConversionProfileStatus.DELETED = "3";

function KalturaCuePointOrderBy(){
}
KalturaCuePointOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaCuePointOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaCuePointOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaCuePointOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaCuePointOrderBy.START_TIME_ASC = "+startTime";
KalturaCuePointOrderBy.START_TIME_DESC = "-startTime";
KalturaCuePointOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaCuePointOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";

function KalturaCuePointType(){
}
KalturaCuePointType.ANNOTATION = "annotation.Annotation";
KalturaCuePointType.AD = "adCuePoint.Ad";
KalturaCuePointType.CODE = "codeCuePoint.Code";

function KalturaDataEntryOrderBy(){
}
KalturaDataEntryOrderBy.NAME_ASC = "+name";
KalturaDataEntryOrderBy.NAME_DESC = "-name";
KalturaDataEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaDataEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaDataEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDataEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDataEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDataEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaDataEntryOrderBy.RANK_ASC = "+rank";
KalturaDataEntryOrderBy.RANK_DESC = "-rank";
KalturaDataEntryOrderBy.TOTAL_RANK_ASC = "+totalRank";
KalturaDataEntryOrderBy.TOTAL_RANK_DESC = "-totalRank";
KalturaDataEntryOrderBy.START_DATE_ASC = "+startDate";
KalturaDataEntryOrderBy.START_DATE_DESC = "-startDate";
KalturaDataEntryOrderBy.END_DATE_ASC = "+endDate";
KalturaDataEntryOrderBy.END_DATE_DESC = "-endDate";
KalturaDataEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaDataEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaDataEntryOrderBy.RECENT_ASC = "+recent";
KalturaDataEntryOrderBy.RECENT_DESC = "-recent";
KalturaDataEntryOrderBy.WEIGHT_ASC = "+weight";
KalturaDataEntryOrderBy.WEIGHT_DESC = "-weight";

function KalturaDistributionProfileOrderBy(){
}
KalturaDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDistributionProviderOrderBy(){
}

function KalturaDistributionProviderType(){
}
KalturaDistributionProviderType.GENERIC = "1";
KalturaDistributionProviderType.SYNDICATION = "2";
KalturaDistributionProviderType.MSN = "msnDistribution.MSN";
KalturaDistributionProviderType.YOUTUBE = "youTubeDistribution.YOUTUBE";
KalturaDistributionProviderType.YOUTUBE_API = "youtubeApiDistribution.YOUTUBE_API";
KalturaDistributionProviderType.DAILYMOTION = "dailymotionDistribution.DAILYMOTION";
KalturaDistributionProviderType.PODCAST = "podcastDistribution.PODCAST";
KalturaDistributionProviderType.TVCOM = "tvComDistribution.TVCOM";
KalturaDistributionProviderType.FREEWHEEL = "freewheelDistribution.FREEWHEEL";
KalturaDistributionProviderType.FREEWHEEL_GENERIC = "freewheelGenericDistribution.FREEWHEEL_GENERIC";
KalturaDistributionProviderType.HULU = "huluDistribution.HULU";
KalturaDistributionProviderType.DOUBLECLICK = "doubleClickDistribution.DOUBLECLICK";
KalturaDistributionProviderType.SYNACOR_HBO = "synacorHboDistribution.SYNACOR_HBO";
KalturaDistributionProviderType.AVN = "avnDistribution.AVN";
KalturaDistributionProviderType.COMCAST_MRSS = "comcastMrssDistribution.COMCAST_MRSS";
KalturaDistributionProviderType.IDETIC = "ideticDistribution.IDETIC";
KalturaDistributionProviderType.TIME_WARNER = "timeWarnerDistribution.TIME_WARNER";
KalturaDistributionProviderType.YAHOO = "yahooDistribution.YAHOO";
KalturaDistributionProviderType.NDN = "ndnDistribution.NDN";
KalturaDistributionProviderType.UVERSE = "uverseDistribution.UVERSE";
KalturaDistributionProviderType.VERIZON_VCAST = "verizonVcastDistribution.VERIZON_VCAST";
KalturaDistributionProviderType.QUICKPLAY = "quickPlayDistribution.QUICKPLAY";
KalturaDistributionProviderType.FTP = "ftpDistribution.FTP";
KalturaDistributionProviderType.FTP_SCHEDULED = "ftpDistribution.FTP_SCHEDULED";
KalturaDistributionProviderType.ATT_UVERSE = "attUverseDistribution.ATT_UVERSE";
KalturaDistributionProviderType.UVERSE_CLICK_TO_ORDER = "uverseClickToOrderDistribution.UVERSE_CLICK_TO_ORDER";
KalturaDistributionProviderType.METRO_PCS = "metroPcsDistribution.METRO_PCS";
KalturaDistributionProviderType.CROSS_KALTURA = "crossKalturaDistribution.CROSS_KALTURA";

function KalturaDocumentEntryOrderBy(){
}
KalturaDocumentEntryOrderBy.NAME_ASC = "+name";
KalturaDocumentEntryOrderBy.NAME_DESC = "-name";
KalturaDocumentEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaDocumentEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaDocumentEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDocumentEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDocumentEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDocumentEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaDocumentEntryOrderBy.RANK_ASC = "+rank";
KalturaDocumentEntryOrderBy.RANK_DESC = "-rank";
KalturaDocumentEntryOrderBy.TOTAL_RANK_ASC = "+totalRank";
KalturaDocumentEntryOrderBy.TOTAL_RANK_DESC = "-totalRank";
KalturaDocumentEntryOrderBy.START_DATE_ASC = "+startDate";
KalturaDocumentEntryOrderBy.START_DATE_DESC = "-startDate";
KalturaDocumentEntryOrderBy.END_DATE_ASC = "+endDate";
KalturaDocumentEntryOrderBy.END_DATE_DESC = "-endDate";
KalturaDocumentEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaDocumentEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaDocumentEntryOrderBy.RECENT_ASC = "+recent";
KalturaDocumentEntryOrderBy.RECENT_DESC = "-recent";
KalturaDocumentEntryOrderBy.WEIGHT_ASC = "+weight";
KalturaDocumentEntryOrderBy.WEIGHT_DESC = "-weight";

function KalturaDocumentFlavorParamsOrderBy(){
}

function KalturaDocumentFlavorParamsOutputOrderBy(){
}

function KalturaDropFolderFileErrorCode(){
}
KalturaDropFolderFileErrorCode.ERROR_UPDATE_ENTRY = "1";
KalturaDropFolderFileErrorCode.ERROR_ADD_ENTRY = "2";
KalturaDropFolderFileErrorCode.FLAVOR_NOT_FOUND = "3";
KalturaDropFolderFileErrorCode.FLAVOR_MISSING_IN_FILE_NAME = "4";
KalturaDropFolderFileErrorCode.SLUG_REGEX_NO_MATCH = "5";
KalturaDropFolderFileErrorCode.ERROR_READING_FILE = "6";
KalturaDropFolderFileErrorCode.ERROR_DOWNLOADING_FILE = "7";
KalturaDropFolderFileErrorCode.LOCAL_FILE_WRONG_SIZE = "dropFolderXmlBulkUpload.LOCAL_FILE_WRONG_SIZE";
KalturaDropFolderFileErrorCode.LOCAL_FILE_WRONG_CHECKSUM = "dropFolderXmlBulkUpload.LOCAL_FILE_WRONG_CHECKSUM";
KalturaDropFolderFileErrorCode.ERROR_WRITING_TEMP_FILE = "dropFolderXmlBulkUpload.ERROR_WRITING_TEMP_FILE";
KalturaDropFolderFileErrorCode.ERROR_ADDING_BULK_UPLOAD = "dropFolderXmlBulkUpload.ERROR_ADDING_BULK_UPLOAD";

function KalturaDropFolderFileHandlerType(){
}
KalturaDropFolderFileHandlerType.CONTENT = "1";
KalturaDropFolderFileHandlerType.XML = "dropFolderXmlBulkUpload.XML";

function KalturaDropFolderFileOrderBy(){
}
KalturaDropFolderFileOrderBy.ID_ASC = "+id";
KalturaDropFolderFileOrderBy.ID_DESC = "-id";
KalturaDropFolderFileOrderBy.FILE_NAME_ASC = "+fileName";
KalturaDropFolderFileOrderBy.FILE_NAME_DESC = "-fileName";
KalturaDropFolderFileOrderBy.FILE_SIZE_ASC = "+fileSize";
KalturaDropFolderFileOrderBy.FILE_SIZE_DESC = "-fileSize";
KalturaDropFolderFileOrderBy.FILE_SIZE_LAST_SET_AT_ASC = "+fileSizeLastSetAt";
KalturaDropFolderFileOrderBy.FILE_SIZE_LAST_SET_AT_DESC = "-fileSizeLastSetAt";
KalturaDropFolderFileOrderBy.PARSED_SLUG_ASC = "+parsedSlug";
KalturaDropFolderFileOrderBy.PARSED_SLUG_DESC = "-parsedSlug";
KalturaDropFolderFileOrderBy.PARSED_FLAVOR_ASC = "+parsedFlavor";
KalturaDropFolderFileOrderBy.PARSED_FLAVOR_DESC = "-parsedFlavor";
KalturaDropFolderFileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDropFolderFileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDropFolderFileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDropFolderFileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDropFolderOrderBy(){
}
KalturaDropFolderOrderBy.ID_ASC = "+id";
KalturaDropFolderOrderBy.ID_DESC = "-id";
KalturaDropFolderOrderBy.NAME_ASC = "+name";
KalturaDropFolderOrderBy.NAME_DESC = "-name";
KalturaDropFolderOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDropFolderOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDropFolderOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDropFolderOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDropFolderType(){
}
KalturaDropFolderType.LOCAL = "1";
KalturaDropFolderType.FTP = "2";
KalturaDropFolderType.SCP = "3";
KalturaDropFolderType.SFTP = "4";

function KalturaDurationType(){
}
KalturaDurationType.NOT_AVAILABLE = "notavailable";
KalturaDurationType.SHORT = "short";
KalturaDurationType.MEDIUM = "medium";
KalturaDurationType.LONG = "long";

function KalturaDynamicEnum(){
}

function KalturaEmailNotificationTemplateOrderBy(){
}
KalturaEmailNotificationTemplateOrderBy.ID_ASC = "+id";
KalturaEmailNotificationTemplateOrderBy.ID_DESC = "-id";
KalturaEmailNotificationTemplateOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaEmailNotificationTemplateOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaEmailNotificationTemplateOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaEmailNotificationTemplateOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaEntryDistributionOrderBy(){
}
KalturaEntryDistributionOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaEntryDistributionOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaEntryDistributionOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaEntryDistributionOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaEntryDistributionOrderBy.SUBMITTED_AT_ASC = "+submittedAt";
KalturaEntryDistributionOrderBy.SUBMITTED_AT_DESC = "-submittedAt";
KalturaEntryDistributionOrderBy.SUNRISE_ASC = "+sunrise";
KalturaEntryDistributionOrderBy.SUNRISE_DESC = "-sunrise";
KalturaEntryDistributionOrderBy.SUNSET_ASC = "+sunset";
KalturaEntryDistributionOrderBy.SUNSET_DESC = "-sunset";

function KalturaEntryReplacementStatus(){
}
KalturaEntryReplacementStatus.NONE = "0";
KalturaEntryReplacementStatus.APPROVED_BUT_NOT_READY = "1";
KalturaEntryReplacementStatus.READY_BUT_NOT_APPROVED = "2";
KalturaEntryReplacementStatus.NOT_READY_AND_NOT_APPROVED = "3";

function KalturaEntryStatus(){
}
KalturaEntryStatus.ERROR_IMPORTING = "-2";
KalturaEntryStatus.ERROR_CONVERTING = "-1";
KalturaEntryStatus.IMPORT = "0";
KalturaEntryStatus.PRECONVERT = "1";
KalturaEntryStatus.READY = "2";
KalturaEntryStatus.DELETED = "3";
KalturaEntryStatus.PENDING = "4";
KalturaEntryStatus.MODERATE = "5";
KalturaEntryStatus.BLOCKED = "6";
KalturaEntryStatus.NO_CONTENT = "7";
KalturaEntryStatus.INFECTED = "virusScan.Infected";
KalturaEntryStatus.SCAN_FAILURE = "virusScan.ScanFailure";

function KalturaEntryType(){
}
KalturaEntryType.AUTOMATIC = "-1";
KalturaEntryType.MEDIA_CLIP = "1";
KalturaEntryType.MIX = "2";
KalturaEntryType.PLAYLIST = "5";
KalturaEntryType.DATA = "6";
KalturaEntryType.LIVE_STREAM = "7";
KalturaEntryType.DOCUMENT = "10";

function KalturaEventNotificationTemplateOrderBy(){
}
KalturaEventNotificationTemplateOrderBy.ID_ASC = "+id";
KalturaEventNotificationTemplateOrderBy.ID_DESC = "-id";
KalturaEventNotificationTemplateOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaEventNotificationTemplateOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaEventNotificationTemplateOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaEventNotificationTemplateOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaEventNotificationTemplateType(){
}
KalturaEventNotificationTemplateType.EMAIL = "emailNotification.Email";

function KalturaFileSyncObjectType(){
}
KalturaFileSyncObjectType.ENTRY = "1";
KalturaFileSyncObjectType.UICONF = "2";
KalturaFileSyncObjectType.BATCHJOB = "3";
KalturaFileSyncObjectType.ASSET = "4";
KalturaFileSyncObjectType.METADATA = "5";
KalturaFileSyncObjectType.METADATA_PROFILE = "6";
KalturaFileSyncObjectType.SYNDICATION_FEED = "7";
KalturaFileSyncObjectType.CONVERSION_PROFILE = "8";
KalturaFileSyncObjectType.FLAVOR_ASSET = "4";
KalturaFileSyncObjectType.GENERIC_DISTRIBUTION_ACTION = "contentDistribution.GenericDistributionAction";
KalturaFileSyncObjectType.ENTRY_DISTRIBUTION = "contentDistribution.EntryDistribution";
KalturaFileSyncObjectType.DISTRIBUTION_PROFILE = "contentDistribution.DistributionProfile";
KalturaFileSyncObjectType.EMAIL_NOTIFICATION_TEMPLATE = "emailNotification.EmailNotificationTemplate";

function KalturaFileSyncOrderBy(){
}
KalturaFileSyncOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaFileSyncOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaFileSyncOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaFileSyncOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaFileSyncOrderBy.READY_AT_ASC = "+readyAt";
KalturaFileSyncOrderBy.READY_AT_DESC = "-readyAt";
KalturaFileSyncOrderBy.SYNC_TIME_ASC = "+syncTime";
KalturaFileSyncOrderBy.SYNC_TIME_DESC = "-syncTime";
KalturaFileSyncOrderBy.FILE_SIZE_ASC = "+fileSize";
KalturaFileSyncOrderBy.FILE_SIZE_DESC = "-fileSize";

function KalturaFlavorAssetOrderBy(){
}
KalturaFlavorAssetOrderBy.SIZE_ASC = "+size";
KalturaFlavorAssetOrderBy.SIZE_DESC = "-size";
KalturaFlavorAssetOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaFlavorAssetOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaFlavorAssetOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaFlavorAssetOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaFlavorAssetOrderBy.DELETED_AT_ASC = "+deletedAt";
KalturaFlavorAssetOrderBy.DELETED_AT_DESC = "-deletedAt";

function KalturaFlavorParamsOrderBy(){
}

function KalturaFlavorParamsOutputOrderBy(){
}

function KalturaFtpDropFolderOrderBy(){
}
KalturaFtpDropFolderOrderBy.ID_ASC = "+id";
KalturaFtpDropFolderOrderBy.ID_DESC = "-id";
KalturaFtpDropFolderOrderBy.NAME_ASC = "+name";
KalturaFtpDropFolderOrderBy.NAME_DESC = "-name";
KalturaFtpDropFolderOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaFtpDropFolderOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaFtpDropFolderOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaFtpDropFolderOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaGenericDistributionProfileOrderBy(){
}
KalturaGenericDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaGenericDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaGenericDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaGenericDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaGenericDistributionProviderActionOrderBy(){
}
KalturaGenericDistributionProviderActionOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaGenericDistributionProviderActionOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaGenericDistributionProviderActionOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaGenericDistributionProviderActionOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaGenericDistributionProviderOrderBy(){
}
KalturaGenericDistributionProviderOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaGenericDistributionProviderOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaGenericDistributionProviderOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaGenericDistributionProviderOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaGenericSyndicationFeedOrderBy(){
}
KalturaGenericSyndicationFeedOrderBy.PLAYLIST_ID_ASC = "+playlistId";
KalturaGenericSyndicationFeedOrderBy.PLAYLIST_ID_DESC = "-playlistId";
KalturaGenericSyndicationFeedOrderBy.NAME_ASC = "+name";
KalturaGenericSyndicationFeedOrderBy.NAME_DESC = "-name";
KalturaGenericSyndicationFeedOrderBy.TYPE_ASC = "+type";
KalturaGenericSyndicationFeedOrderBy.TYPE_DESC = "-type";
KalturaGenericSyndicationFeedOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaGenericSyndicationFeedOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaGenericSyndicationFeedOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaGenericSyndicationFeedOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaGenericXsltSyndicationFeedOrderBy(){
}
KalturaGenericXsltSyndicationFeedOrderBy.PLAYLIST_ID_ASC = "+playlistId";
KalturaGenericXsltSyndicationFeedOrderBy.PLAYLIST_ID_DESC = "-playlistId";
KalturaGenericXsltSyndicationFeedOrderBy.NAME_ASC = "+name";
KalturaGenericXsltSyndicationFeedOrderBy.NAME_DESC = "-name";
KalturaGenericXsltSyndicationFeedOrderBy.TYPE_ASC = "+type";
KalturaGenericXsltSyndicationFeedOrderBy.TYPE_DESC = "-type";
KalturaGenericXsltSyndicationFeedOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaGenericXsltSyndicationFeedOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaGenericXsltSyndicationFeedOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaGenericXsltSyndicationFeedOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaGeoCoderType(){
}
KalturaGeoCoderType.KALTURA = "1";

function KalturaGoogleSyndicationFeedAdultValues(){
}
KalturaGoogleSyndicationFeedAdultValues.YES = "Yes";
KalturaGoogleSyndicationFeedAdultValues.NO = "No";

function KalturaGoogleVideoSyndicationFeedOrderBy(){
}
KalturaGoogleVideoSyndicationFeedOrderBy.PLAYLIST_ID_ASC = "+playlistId";
KalturaGoogleVideoSyndicationFeedOrderBy.PLAYLIST_ID_DESC = "-playlistId";
KalturaGoogleVideoSyndicationFeedOrderBy.NAME_ASC = "+name";
KalturaGoogleVideoSyndicationFeedOrderBy.NAME_DESC = "-name";
KalturaGoogleVideoSyndicationFeedOrderBy.TYPE_ASC = "+type";
KalturaGoogleVideoSyndicationFeedOrderBy.TYPE_DESC = "-type";
KalturaGoogleVideoSyndicationFeedOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaGoogleVideoSyndicationFeedOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaGoogleVideoSyndicationFeedOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaGoogleVideoSyndicationFeedOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaITunesSyndicationFeedAdultValues(){
}
KalturaITunesSyndicationFeedAdultValues.YES = "yes";
KalturaITunesSyndicationFeedAdultValues.NO = "no";
KalturaITunesSyndicationFeedAdultValues.CLEAN = "clean";

function KalturaITunesSyndicationFeedCategories(){
}
KalturaITunesSyndicationFeedCategories.ARTS = "Arts";
KalturaITunesSyndicationFeedCategories.ARTS_DESIGN = "Arts/Design";
KalturaITunesSyndicationFeedCategories.ARTS_FASHION_BEAUTY = "Arts/Fashion &amp; Beauty";
KalturaITunesSyndicationFeedCategories.ARTS_FOOD = "Arts/Food";
KalturaITunesSyndicationFeedCategories.ARTS_LITERATURE = "Arts/Literature";
KalturaITunesSyndicationFeedCategories.ARTS_PERFORMING_ARTS = "Arts/Performing Arts";
KalturaITunesSyndicationFeedCategories.ARTS_VISUAL_ARTS = "Arts/Visual Arts";
KalturaITunesSyndicationFeedCategories.BUSINESS = "Business";
KalturaITunesSyndicationFeedCategories.BUSINESS_BUSINESS_NEWS = "Business/Business News";
KalturaITunesSyndicationFeedCategories.BUSINESS_CAREERS = "Business/Careers";
KalturaITunesSyndicationFeedCategories.BUSINESS_INVESTING = "Business/Investing";
KalturaITunesSyndicationFeedCategories.BUSINESS_MANAGEMENT_MARKETING = "Business/Management &amp; Marketing";
KalturaITunesSyndicationFeedCategories.BUSINESS_SHOPPING = "Business/Shopping";
KalturaITunesSyndicationFeedCategories.COMEDY = "Comedy";
KalturaITunesSyndicationFeedCategories.EDUCATION = "Education";
KalturaITunesSyndicationFeedCategories.EDUCATION_TECHNOLOGY = "Education/Education Technology";
KalturaITunesSyndicationFeedCategories.EDUCATION_HIGHER_EDUCATION = "Education/Higher Education";
KalturaITunesSyndicationFeedCategories.EDUCATION_K_12 = "Education/K-12";
KalturaITunesSyndicationFeedCategories.EDUCATION_LANGUAGE_COURSES = "Education/Language Courses";
KalturaITunesSyndicationFeedCategories.EDUCATION_TRAINING = "Education/Training";
KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES = "Games &amp; Hobbies";
KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES_AUTOMOTIVE = "Games &amp; Hobbies/Automotive";
KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES_AVIATION = "Games &amp; Hobbies/Aviation";
KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES_HOBBIES = "Games &amp; Hobbies/Hobbies";
KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES_OTHER_GAMES = "Games &amp; Hobbies/Other Games";
KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES_VIDEO_GAMES = "Games &amp; Hobbies/Video Games";
KalturaITunesSyndicationFeedCategories.GOVERNMENT_ORGANIZATIONS = "Government &amp; Organizations";
KalturaITunesSyndicationFeedCategories.GOVERNMENT_ORGANIZATIONS_LOCAL = "Government &amp; Organizations/Local";
KalturaITunesSyndicationFeedCategories.GOVERNMENT_ORGANIZATIONS_NATIONAL = "Government &amp; Organizations/National";
KalturaITunesSyndicationFeedCategories.GOVERNMENT_ORGANIZATIONS_NON_PROFIT = "Government &amp; Organizations/Non-Profit";
KalturaITunesSyndicationFeedCategories.GOVERNMENT_ORGANIZATIONS_REGIONAL = "Government &amp; Organizations/Regional";
KalturaITunesSyndicationFeedCategories.HEALTH = "Health";
KalturaITunesSyndicationFeedCategories.HEALTH_ALTERNATIVE_HEALTH = "Health/Alternative Health";
KalturaITunesSyndicationFeedCategories.HEALTH_FITNESS_NUTRITION = "Health/Fitness &amp; Nutrition";
KalturaITunesSyndicationFeedCategories.HEALTH_SELF_HELP = "Health/Self-Help";
KalturaITunesSyndicationFeedCategories.HEALTH_SEXUALITY = "Health/Sexuality";
KalturaITunesSyndicationFeedCategories.KIDS_FAMILY = "Kids &amp; Family";
KalturaITunesSyndicationFeedCategories.MUSIC = "Music";
KalturaITunesSyndicationFeedCategories.NEWS_POLITICS = "News &amp; Politics";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY = "Religion &amp; Spirituality";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_BUDDHISM = "Religion &amp; Spirituality/Buddhism";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_CHRISTIANITY = "Religion &amp; Spirituality/Christianity";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_HINDUISM = "Religion &amp; Spirituality/Hinduism";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_ISLAM = "Religion &amp; Spirituality/Islam";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_JUDAISM = "Religion &amp; Spirituality/Judaism";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_OTHER = "Religion &amp; Spirituality/Other";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_SPIRITUALITY = "Religion &amp; Spirituality/Spirituality";
KalturaITunesSyndicationFeedCategories.SCIENCE_MEDICINE = "Science &amp; Medicine";
KalturaITunesSyndicationFeedCategories.SCIENCE_MEDICINE_MEDICINE = "Science &amp; Medicine/Medicine";
KalturaITunesSyndicationFeedCategories.SCIENCE_MEDICINE_NATURAL_SCIENCES = "Science &amp; Medicine/Natural Sciences";
KalturaITunesSyndicationFeedCategories.SCIENCE_MEDICINE_SOCIAL_SCIENCES = "Science &amp; Medicine/Social Sciences";
KalturaITunesSyndicationFeedCategories.SOCIETY_CULTURE = "Society &amp; Culture";
KalturaITunesSyndicationFeedCategories.SOCIETY_CULTURE_HISTORY = "Society &amp; Culture/History";
KalturaITunesSyndicationFeedCategories.SOCIETY_CULTURE_PERSONAL_JOURNALS = "Society &amp; Culture/Personal Journals";
KalturaITunesSyndicationFeedCategories.SOCIETY_CULTURE_PHILOSOPHY = "Society &amp; Culture/Philosophy";
KalturaITunesSyndicationFeedCategories.SOCIETY_CULTURE_PLACES_TRAVEL = "Society &amp; Culture/Places &amp; Travel";
KalturaITunesSyndicationFeedCategories.SPORTS_RECREATION = "Sports &amp; Recreation";
KalturaITunesSyndicationFeedCategories.SPORTS_RECREATION_AMATEUR = "Sports &amp; Recreation/Amateur";
KalturaITunesSyndicationFeedCategories.SPORTS_RECREATION_COLLEGE_HIGH_SCHOOL = "Sports &amp; Recreation/College &amp; High School";
KalturaITunesSyndicationFeedCategories.SPORTS_RECREATION_OUTDOOR = "Sports &amp; Recreation/Outdoor";
KalturaITunesSyndicationFeedCategories.SPORTS_RECREATION_PROFESSIONAL = "Sports &amp; Recreation/Professional";
KalturaITunesSyndicationFeedCategories.TECHNOLOGY = "Technology";
KalturaITunesSyndicationFeedCategories.TECHNOLOGY_GADGETS = "Technology/Gadgets";
KalturaITunesSyndicationFeedCategories.TECHNOLOGY_TECH_NEWS = "Technology/Tech News";
KalturaITunesSyndicationFeedCategories.TECHNOLOGY_PODCASTING = "Technology/Podcasting";
KalturaITunesSyndicationFeedCategories.TECHNOLOGY_SOFTWARE_HOW_TO = "Technology/Software How-To";
KalturaITunesSyndicationFeedCategories.TV_FILM = "TV &amp; Film";

function KalturaITunesSyndicationFeedOrderBy(){
}
KalturaITunesSyndicationFeedOrderBy.PLAYLIST_ID_ASC = "+playlistId";
KalturaITunesSyndicationFeedOrderBy.PLAYLIST_ID_DESC = "-playlistId";
KalturaITunesSyndicationFeedOrderBy.NAME_ASC = "+name";
KalturaITunesSyndicationFeedOrderBy.NAME_DESC = "-name";
KalturaITunesSyndicationFeedOrderBy.TYPE_ASC = "+type";
KalturaITunesSyndicationFeedOrderBy.TYPE_DESC = "-type";
KalturaITunesSyndicationFeedOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaITunesSyndicationFeedOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaITunesSyndicationFeedOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaITunesSyndicationFeedOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaImageFlavorParamsOrderBy(){
}

function KalturaImageFlavorParamsOutputOrderBy(){
}

function KalturaLanguage(){
}
KalturaLanguage.AB = "Abkhazian";
KalturaLanguage.AA = "Afar";
KalturaLanguage.AF = "Afrikaans";
KalturaLanguage.SQ = "Albanian";
KalturaLanguage.AM = "Amharic";
KalturaLanguage.AR = "Arabic";
KalturaLanguage.HY = "Armenian";
KalturaLanguage.AS_ = "Assamese";
KalturaLanguage.AY = "Aymara";
KalturaLanguage.AZ = "Azerbaijani";
KalturaLanguage.BA = "Bashkir";
KalturaLanguage.EU = "Basque";
KalturaLanguage.BN = "Bengali (Bangla)";
KalturaLanguage.DZ = "Bhutani";
KalturaLanguage.BH = "Bihari";
KalturaLanguage.BI = "Bislama";
KalturaLanguage.BR = "Breton";
KalturaLanguage.BG = "Bulgarian";
KalturaLanguage.MY = "Burmese";
KalturaLanguage.BE = "Byelorussian (Belarusian)";
KalturaLanguage.KM = "Cambodian";
KalturaLanguage.CA = "Catalan";
KalturaLanguage.ZH = "Chinese";
KalturaLanguage.CO = "Corsican";
KalturaLanguage.HR = "Croatian";
KalturaLanguage.CS = "Czech";
KalturaLanguage.DA = "Danish";
KalturaLanguage.NL = "Dutch";
KalturaLanguage.EN = "English";
KalturaLanguage.EO = "Esperanto";
KalturaLanguage.ET = "Estonian";
KalturaLanguage.FO = "Faeroese";
KalturaLanguage.FA = "Farsi";
KalturaLanguage.FJ = "Fiji";
KalturaLanguage.FI = "Finnish";
KalturaLanguage.FR = "French";
KalturaLanguage.FY = "Frisian";
KalturaLanguage.GL = "Galician";
KalturaLanguage.GD = "Gaelic (Scottish)";
KalturaLanguage.GV = "Gaelic (Manx)";
KalturaLanguage.KA = "Georgian";
KalturaLanguage.DE = "German";
KalturaLanguage.EL = "Greek";
KalturaLanguage.KL = "Greenlandic";
KalturaLanguage.GN = "Guarani";
KalturaLanguage.GU = "Gujarati";
KalturaLanguage.HA = "Hausa";
KalturaLanguage.HE = "Hebrew";
KalturaLanguage.IW = "Hebrew";
KalturaLanguage.HI = "Hindi";
KalturaLanguage.HU = "Hungarian";
KalturaLanguage.IS = "Icelandic";
KalturaLanguage.ID = "Indonesian";
KalturaLanguage.IN = "Indonesian";
KalturaLanguage.IA = "Interlingua";
KalturaLanguage.IE = "Interlingue";
KalturaLanguage.IU = "Inuktitut";
KalturaLanguage.IK = "Inupiak";
KalturaLanguage.GA = "Irish";
KalturaLanguage.IT = "Italian";
KalturaLanguage.JA = "Japanese";
KalturaLanguage.JV = "Javanese";
KalturaLanguage.KN = "Kannada";
KalturaLanguage.KS = "Kashmiri";
KalturaLanguage.KK = "Kazakh";
KalturaLanguage.RW = "Kinyarwanda (Ruanda)";
KalturaLanguage.KY = "Kirghiz";
KalturaLanguage.RN = "Kirundi (Rundi)";
KalturaLanguage.KO = "Korean";
KalturaLanguage.KU = "Kurdish";
KalturaLanguage.LO = "Laothian";
KalturaLanguage.LA = "Latin";
KalturaLanguage.LV = "Latvian (Lettish)";
KalturaLanguage.LI = "Limburgish ( Limburger)";
KalturaLanguage.LN = "Lingala";
KalturaLanguage.LT = "Lithuanian";
KalturaLanguage.MK = "Macedonian";
KalturaLanguage.MG = "Malagasy";
KalturaLanguage.MS = "Malay";
KalturaLanguage.ML = "Malayalam";
KalturaLanguage.MT = "Maltese";
KalturaLanguage.MI = "Maori";
KalturaLanguage.MR = "Marathi";
KalturaLanguage.MO = "Moldavian";
KalturaLanguage.MN = "Mongolian";
KalturaLanguage.NA = "Nauru";
KalturaLanguage.NE = "Nepali";
KalturaLanguage.NO = "Norwegian";
KalturaLanguage.OC = "Occitan";
KalturaLanguage.OR_ = "Oriya";
KalturaLanguage.OM = "Oromo (Afan, Galla)";
KalturaLanguage.PS = "Pashto (Pushto)";
KalturaLanguage.PL = "Polish";
KalturaLanguage.PT = "Portuguese";
KalturaLanguage.PA = "Punjabi";
KalturaLanguage.QU = "Quechua";
KalturaLanguage.RM = "Rhaeto-Romance";
KalturaLanguage.RO = "Romanian";
KalturaLanguage.RU = "Russian";
KalturaLanguage.SM = "Samoan";
KalturaLanguage.SG = "Sangro";
KalturaLanguage.SA = "Sanskrit";
KalturaLanguage.SR = "Serbian";
KalturaLanguage.SH = "Serbo-Croatian";
KalturaLanguage.ST = "Sesotho";
KalturaLanguage.TN = "Setswana";
KalturaLanguage.SN = "Shona";
KalturaLanguage.SD = "Sindhi";
KalturaLanguage.SI = "Sinhalese";
KalturaLanguage.SS = "Siswati";
KalturaLanguage.SK = "Slovak";
KalturaLanguage.SL = "Slovenian";
KalturaLanguage.SO = "Somali";
KalturaLanguage.ES = "Spanish";
KalturaLanguage.SU = "Sundanese";
KalturaLanguage.SW = "Swahili (Kiswahili)";
KalturaLanguage.SV = "Swedish";
KalturaLanguage.TL = "Tagalog";
KalturaLanguage.TG = "Tajik";
KalturaLanguage.TA = "Tamil";
KalturaLanguage.TT = "Tatar";
KalturaLanguage.TE = "Telugu";
KalturaLanguage.TH = "Thai";
KalturaLanguage.BO = "Tibetan";
KalturaLanguage.TI = "Tigrinya";
KalturaLanguage.TO = "Tonga";
KalturaLanguage.TS = "Tsonga";
KalturaLanguage.TR = "Turkish";
KalturaLanguage.TK = "Turkmen";
KalturaLanguage.TW = "Twi";
KalturaLanguage.UG = "Uighur";
KalturaLanguage.UK = "Ukrainian";
KalturaLanguage.UR = "Urdu";
KalturaLanguage.UZ = "Uzbek";
KalturaLanguage.VI = "Vietnamese";
KalturaLanguage.VO = "Volapuk";
KalturaLanguage.CY = "Welsh";
KalturaLanguage.WO = "Wolof";
KalturaLanguage.XH = "Xhosa";
KalturaLanguage.YI = "Yiddish";
KalturaLanguage.JI = "Yiddish";
KalturaLanguage.YO = "Yoruba";
KalturaLanguage.ZU = "Zulu";

function KalturaLanguageCode(){
}
KalturaLanguageCode.AB = "ab";
KalturaLanguageCode.AA = "aa";
KalturaLanguageCode.AF = "af";
KalturaLanguageCode.SQ = "sq";
KalturaLanguageCode.AM = "am";
KalturaLanguageCode.AR = "ar";
KalturaLanguageCode.HY = "hy";
KalturaLanguageCode.AS_ = "as";
KalturaLanguageCode.AY = "ay";
KalturaLanguageCode.AZ = "az";
KalturaLanguageCode.BA = "ba";
KalturaLanguageCode.EU = "eu";
KalturaLanguageCode.BN = "bn";
KalturaLanguageCode.DZ = "dz";
KalturaLanguageCode.BH = "bh";
KalturaLanguageCode.BI = "bi";
KalturaLanguageCode.BR = "br";
KalturaLanguageCode.BG = "bg";
KalturaLanguageCode.MY = "my";
KalturaLanguageCode.BE = "be";
KalturaLanguageCode.KM = "km";
KalturaLanguageCode.CA = "ca";
KalturaLanguageCode.ZH = "zh";
KalturaLanguageCode.CO = "co";
KalturaLanguageCode.HR = "hr";
KalturaLanguageCode.CS = "cs";
KalturaLanguageCode.DA = "da";
KalturaLanguageCode.NL = "nl";
KalturaLanguageCode.EN = "en";
KalturaLanguageCode.EO = "eo";
KalturaLanguageCode.ET = "et";
KalturaLanguageCode.FO = "fo";
KalturaLanguageCode.FA = "fa";
KalturaLanguageCode.FJ = "fj";
KalturaLanguageCode.FI = "fi";
KalturaLanguageCode.FR = "fr";
KalturaLanguageCode.FY = "fy";
KalturaLanguageCode.GL = "gl";
KalturaLanguageCode.GD = "gd";
KalturaLanguageCode.GV = "gv";
KalturaLanguageCode.KA = "ka";
KalturaLanguageCode.DE = "de";
KalturaLanguageCode.EL = "el";
KalturaLanguageCode.KL = "kl";
KalturaLanguageCode.GN = "gn";
KalturaLanguageCode.GU = "gu";
KalturaLanguageCode.HA = "ha";
KalturaLanguageCode.HE = "he";
KalturaLanguageCode.IW = "iw";
KalturaLanguageCode.HI = "hi";
KalturaLanguageCode.HU = "hu";
KalturaLanguageCode.IS = "is";
KalturaLanguageCode.ID = "id";
KalturaLanguageCode.IN = "in";
KalturaLanguageCode.IA = "ia";
KalturaLanguageCode.IE = "ie";
KalturaLanguageCode.IU = "iu";
KalturaLanguageCode.IK = "ik";
KalturaLanguageCode.GA = "ga";
KalturaLanguageCode.IT = "it";
KalturaLanguageCode.JA = "ja";
KalturaLanguageCode.JV = "jv";
KalturaLanguageCode.KN = "kn";
KalturaLanguageCode.KS = "ks";
KalturaLanguageCode.KK = "kk";
KalturaLanguageCode.RW = "rw";
KalturaLanguageCode.KY = "ky";
KalturaLanguageCode.RN = "rn";
KalturaLanguageCode.KO = "ko";
KalturaLanguageCode.KU = "ku";
KalturaLanguageCode.LO = "lo";
KalturaLanguageCode.LA = "la";
KalturaLanguageCode.LV = "lv";
KalturaLanguageCode.LI = "li";
KalturaLanguageCode.LN = "ln";
KalturaLanguageCode.LT = "lt";
KalturaLanguageCode.MK = "mk";
KalturaLanguageCode.MG = "mg";
KalturaLanguageCode.MS = "ms";
KalturaLanguageCode.ML = "ml";
KalturaLanguageCode.MT = "mt";
KalturaLanguageCode.MI = "mi";
KalturaLanguageCode.MR = "mr";
KalturaLanguageCode.MO = "mo";
KalturaLanguageCode.MN = "mn";
KalturaLanguageCode.NA = "na";
KalturaLanguageCode.NE = "ne";
KalturaLanguageCode.NO = "no";
KalturaLanguageCode.OC = "oc";
KalturaLanguageCode.OR_ = "or";
KalturaLanguageCode.OM = "om";
KalturaLanguageCode.PS = "ps";
KalturaLanguageCode.PL = "pl";
KalturaLanguageCode.PT = "pt";
KalturaLanguageCode.PA = "pa";
KalturaLanguageCode.QU = "qu";
KalturaLanguageCode.RM = "rm";
KalturaLanguageCode.RO = "ro";
KalturaLanguageCode.RU = "ru";
KalturaLanguageCode.SM = "sm";
KalturaLanguageCode.SG = "sg";
KalturaLanguageCode.SA = "sa";
KalturaLanguageCode.SR = "sr";
KalturaLanguageCode.SH = "sh";
KalturaLanguageCode.ST = "st";
KalturaLanguageCode.TN = "tn";
KalturaLanguageCode.SN = "sn";
KalturaLanguageCode.SD = "sd";
KalturaLanguageCode.SI = "si";
KalturaLanguageCode.SS = "ss";
KalturaLanguageCode.SK = "sk";
KalturaLanguageCode.SL = "sl";
KalturaLanguageCode.SO = "so";
KalturaLanguageCode.ES = "es";
KalturaLanguageCode.SU = "su";
KalturaLanguageCode.SW = "sw";
KalturaLanguageCode.SV = "sv";
KalturaLanguageCode.TL = "tl";
KalturaLanguageCode.TG = "tg";
KalturaLanguageCode.TA = "ta";
KalturaLanguageCode.TT = "tt";
KalturaLanguageCode.TE = "te";
KalturaLanguageCode.TH = "th";
KalturaLanguageCode.BO = "bo";
KalturaLanguageCode.TI = "ti";
KalturaLanguageCode.TO = "to";
KalturaLanguageCode.TS = "ts";
KalturaLanguageCode.TR = "tr";
KalturaLanguageCode.TK = "tk";
KalturaLanguageCode.TW = "tw";
KalturaLanguageCode.UG = "ug";
KalturaLanguageCode.UK = "uk";
KalturaLanguageCode.UR = "ur";
KalturaLanguageCode.UZ = "uz";
KalturaLanguageCode.VI = "vi";
KalturaLanguageCode.VO = "vo";
KalturaLanguageCode.CY = "cy";
KalturaLanguageCode.WO = "wo";
KalturaLanguageCode.XH = "xh";
KalturaLanguageCode.YI = "yi";
KalturaLanguageCode.JI = "ji";
KalturaLanguageCode.YO = "yo";
KalturaLanguageCode.ZU = "zu";

function KalturaLiveStreamAdminEntryOrderBy(){
}
KalturaLiveStreamAdminEntryOrderBy.MEDIA_TYPE_ASC = "+mediaType";
KalturaLiveStreamAdminEntryOrderBy.MEDIA_TYPE_DESC = "-mediaType";
KalturaLiveStreamAdminEntryOrderBy.PLAYS_ASC = "+plays";
KalturaLiveStreamAdminEntryOrderBy.PLAYS_DESC = "-plays";
KalturaLiveStreamAdminEntryOrderBy.VIEWS_ASC = "+views";
KalturaLiveStreamAdminEntryOrderBy.VIEWS_DESC = "-views";
KalturaLiveStreamAdminEntryOrderBy.DURATION_ASC = "+duration";
KalturaLiveStreamAdminEntryOrderBy.DURATION_DESC = "-duration";
KalturaLiveStreamAdminEntryOrderBy.MS_DURATION_ASC = "+msDuration";
KalturaLiveStreamAdminEntryOrderBy.MS_DURATION_DESC = "-msDuration";
KalturaLiveStreamAdminEntryOrderBy.NAME_ASC = "+name";
KalturaLiveStreamAdminEntryOrderBy.NAME_DESC = "-name";
KalturaLiveStreamAdminEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaLiveStreamAdminEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaLiveStreamAdminEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaLiveStreamAdminEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaLiveStreamAdminEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaLiveStreamAdminEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaLiveStreamAdminEntryOrderBy.RANK_ASC = "+rank";
KalturaLiveStreamAdminEntryOrderBy.RANK_DESC = "-rank";
KalturaLiveStreamAdminEntryOrderBy.TOTAL_RANK_ASC = "+totalRank";
KalturaLiveStreamAdminEntryOrderBy.TOTAL_RANK_DESC = "-totalRank";
KalturaLiveStreamAdminEntryOrderBy.START_DATE_ASC = "+startDate";
KalturaLiveStreamAdminEntryOrderBy.START_DATE_DESC = "-startDate";
KalturaLiveStreamAdminEntryOrderBy.END_DATE_ASC = "+endDate";
KalturaLiveStreamAdminEntryOrderBy.END_DATE_DESC = "-endDate";
KalturaLiveStreamAdminEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaLiveStreamAdminEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaLiveStreamAdminEntryOrderBy.RECENT_ASC = "+recent";
KalturaLiveStreamAdminEntryOrderBy.RECENT_DESC = "-recent";
KalturaLiveStreamAdminEntryOrderBy.WEIGHT_ASC = "+weight";
KalturaLiveStreamAdminEntryOrderBy.WEIGHT_DESC = "-weight";

function KalturaLiveStreamEntryOrderBy(){
}
KalturaLiveStreamEntryOrderBy.MEDIA_TYPE_ASC = "+mediaType";
KalturaLiveStreamEntryOrderBy.MEDIA_TYPE_DESC = "-mediaType";
KalturaLiveStreamEntryOrderBy.PLAYS_ASC = "+plays";
KalturaLiveStreamEntryOrderBy.PLAYS_DESC = "-plays";
KalturaLiveStreamEntryOrderBy.VIEWS_ASC = "+views";
KalturaLiveStreamEntryOrderBy.VIEWS_DESC = "-views";
KalturaLiveStreamEntryOrderBy.DURATION_ASC = "+duration";
KalturaLiveStreamEntryOrderBy.DURATION_DESC = "-duration";
KalturaLiveStreamEntryOrderBy.MS_DURATION_ASC = "+msDuration";
KalturaLiveStreamEntryOrderBy.MS_DURATION_DESC = "-msDuration";
KalturaLiveStreamEntryOrderBy.NAME_ASC = "+name";
KalturaLiveStreamEntryOrderBy.NAME_DESC = "-name";
KalturaLiveStreamEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaLiveStreamEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaLiveStreamEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaLiveStreamEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaLiveStreamEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaLiveStreamEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaLiveStreamEntryOrderBy.RANK_ASC = "+rank";
KalturaLiveStreamEntryOrderBy.RANK_DESC = "-rank";
KalturaLiveStreamEntryOrderBy.TOTAL_RANK_ASC = "+totalRank";
KalturaLiveStreamEntryOrderBy.TOTAL_RANK_DESC = "-totalRank";
KalturaLiveStreamEntryOrderBy.START_DATE_ASC = "+startDate";
KalturaLiveStreamEntryOrderBy.START_DATE_DESC = "-startDate";
KalturaLiveStreamEntryOrderBy.END_DATE_ASC = "+endDate";
KalturaLiveStreamEntryOrderBy.END_DATE_DESC = "-endDate";
KalturaLiveStreamEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaLiveStreamEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaLiveStreamEntryOrderBy.RECENT_ASC = "+recent";
KalturaLiveStreamEntryOrderBy.RECENT_DESC = "-recent";
KalturaLiveStreamEntryOrderBy.WEIGHT_ASC = "+weight";
KalturaLiveStreamEntryOrderBy.WEIGHT_DESC = "-weight";

function KalturaMailJobOrderBy(){
}
KalturaMailJobOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaMailJobOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaMailJobOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaMailJobOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaMailJobOrderBy.PROCESSOR_EXPIRATION_ASC = "+processorExpiration";
KalturaMailJobOrderBy.PROCESSOR_EXPIRATION_DESC = "-processorExpiration";
KalturaMailJobOrderBy.EXECUTION_ATTEMPTS_ASC = "+executionAttempts";
KalturaMailJobOrderBy.EXECUTION_ATTEMPTS_DESC = "-executionAttempts";
KalturaMailJobOrderBy.LOCK_VERSION_ASC = "+lockVersion";
KalturaMailJobOrderBy.LOCK_VERSION_DESC = "-lockVersion";

function KalturaMailType(){
}
KalturaMailType.MAIL_TYPE_KALTURA_NEWSLETTER = "10";
KalturaMailType.MAIL_TYPE_ADDED_TO_FAVORITES = "11";
KalturaMailType.MAIL_TYPE_ADDED_TO_CLIP_FAVORITES = "12";
KalturaMailType.MAIL_TYPE_NEW_COMMENT_IN_PROFILE = "13";
KalturaMailType.MAIL_TYPE_CLIP_ADDED_YOUR_KALTURA = "20";
KalturaMailType.MAIL_TYPE_VIDEO_ADDED = "21";
KalturaMailType.MAIL_TYPE_ROUGHCUT_CREATED = "22";
KalturaMailType.MAIL_TYPE_ADDED_KALTURA_TO_YOUR_FAVORITES = "23";
KalturaMailType.MAIL_TYPE_NEW_COMMENT_IN_KALTURA = "24";
KalturaMailType.MAIL_TYPE_CLIP_ADDED = "30";
KalturaMailType.MAIL_TYPE_VIDEO_CREATED = "31";
KalturaMailType.MAIL_TYPE_ADDED_KALTURA_TO_HIS_FAVORITES = "32";
KalturaMailType.MAIL_TYPE_NEW_COMMENT_IN_KALTURA_YOU_CONTRIBUTED = "33";
KalturaMailType.MAIL_TYPE_CLIP_CONTRIBUTED = "40";
KalturaMailType.MAIL_TYPE_ROUGHCUT_CREATED_SUBSCRIBED = "41";
KalturaMailType.MAIL_TYPE_ADDED_KALTURA_TO_HIS_FAVORITES_SUBSCRIBED = "42";
KalturaMailType.MAIL_TYPE_NEW_COMMENT_IN_KALTURA_YOU_SUBSCRIBED = "43";
KalturaMailType.MAIL_TYPE_REGISTER_CONFIRM = "50";
KalturaMailType.MAIL_TYPE_PASSWORD_RESET = "51";
KalturaMailType.MAIL_TYPE_LOGIN_MAIL_RESET = "52";
KalturaMailType.MAIL_TYPE_REGISTER_CONFIRM_VIDEO_SERVICE = "54";
KalturaMailType.MAIL_TYPE_VIDEO_READY = "60";
KalturaMailType.MAIL_TYPE_VIDEO_IS_READY = "62";
KalturaMailType.MAIL_TYPE_BULK_DOWNLOAD_READY = "63";
KalturaMailType.MAIL_TYPE_BULKUPLOAD_FINISHED = "64";
KalturaMailType.MAIL_TYPE_BULKUPLOAD_FAILED = "65";
KalturaMailType.MAIL_TYPE_BULKUPLOAD_ABORTED = "66";
KalturaMailType.MAIL_TYPE_NOTIFY_ERR = "70";
KalturaMailType.MAIL_TYPE_ACCOUNT_UPGRADE_CONFIRM = "80";
KalturaMailType.MAIL_TYPE_VIDEO_SERVICE_NOTICE = "81";
KalturaMailType.MAIL_TYPE_VIDEO_SERVICE_NOTICE_LIMIT_REACHED = "82";
KalturaMailType.MAIL_TYPE_VIDEO_SERVICE_NOTICE_ACCOUNT_LOCKED = "83";
KalturaMailType.MAIL_TYPE_VIDEO_SERVICE_NOTICE_ACCOUNT_DELETED = "84";
KalturaMailType.MAIL_TYPE_VIDEO_SERVICE_NOTICE_UPGRADE_OFFER = "85";
KalturaMailType.MAIL_TYPE_ACCOUNT_REACTIVE_CONFIRM = "86";
KalturaMailType.MAIL_TYPE_SYSTEM_USER_RESET_PASSWORD = "110";
KalturaMailType.MAIL_TYPE_SYSTEM_USER_RESET_PASSWORD_SUCCESS = "111";
KalturaMailType.MAIL_TYPE_SYSTEM_USER_NEW_PASSWORD = "112";
KalturaMailType.MAIL_TYPE_SYSTEM_USER_CREDENTIALS_SAVED = "113";

function KalturaMediaEntryOrderBy(){
}
KalturaMediaEntryOrderBy.MEDIA_TYPE_ASC = "+mediaType";
KalturaMediaEntryOrderBy.MEDIA_TYPE_DESC = "-mediaType";
KalturaMediaEntryOrderBy.PLAYS_ASC = "+plays";
KalturaMediaEntryOrderBy.PLAYS_DESC = "-plays";
KalturaMediaEntryOrderBy.VIEWS_ASC = "+views";
KalturaMediaEntryOrderBy.VIEWS_DESC = "-views";
KalturaMediaEntryOrderBy.DURATION_ASC = "+duration";
KalturaMediaEntryOrderBy.DURATION_DESC = "-duration";
KalturaMediaEntryOrderBy.MS_DURATION_ASC = "+msDuration";
KalturaMediaEntryOrderBy.MS_DURATION_DESC = "-msDuration";
KalturaMediaEntryOrderBy.NAME_ASC = "+name";
KalturaMediaEntryOrderBy.NAME_DESC = "-name";
KalturaMediaEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaMediaEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaMediaEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaMediaEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaMediaEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaMediaEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaMediaEntryOrderBy.RANK_ASC = "+rank";
KalturaMediaEntryOrderBy.RANK_DESC = "-rank";
KalturaMediaEntryOrderBy.TOTAL_RANK_ASC = "+totalRank";
KalturaMediaEntryOrderBy.TOTAL_RANK_DESC = "-totalRank";
KalturaMediaEntryOrderBy.START_DATE_ASC = "+startDate";
KalturaMediaEntryOrderBy.START_DATE_DESC = "-startDate";
KalturaMediaEntryOrderBy.END_DATE_ASC = "+endDate";
KalturaMediaEntryOrderBy.END_DATE_DESC = "-endDate";
KalturaMediaEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaMediaEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaMediaEntryOrderBy.RECENT_ASC = "+recent";
KalturaMediaEntryOrderBy.RECENT_DESC = "-recent";
KalturaMediaEntryOrderBy.WEIGHT_ASC = "+weight";
KalturaMediaEntryOrderBy.WEIGHT_DESC = "-weight";

function KalturaMediaFlavorParamsOrderBy(){
}

function KalturaMediaFlavorParamsOutputOrderBy(){
}

function KalturaMediaInfoOrderBy(){
}

function KalturaMediaParserType(){
}
KalturaMediaParserType.MEDIAINFO = "0";
KalturaMediaParserType.FFMPEG = "1";
KalturaMediaParserType.REMOTE_MEDIAINFO = "remoteMediaInfo.RemoteMediaInfo";

function KalturaMetadataObjectType(){
}
KalturaMetadataObjectType.ENTRY = "1";
KalturaMetadataObjectType.CATEGORY = "2";
KalturaMetadataObjectType.USER = "3";
KalturaMetadataObjectType.PARTNER = "4";
KalturaMetadataObjectType.ANNOTATION = "annotation.Annotation";
KalturaMetadataObjectType.AD_CUE_POINT = "adCuePoint.AdCuePoint";
KalturaMetadataObjectType.CODE_CUE_POINT = "codeCuePoint.CodeCuePoint";

function KalturaMetadataOrderBy(){
}
KalturaMetadataOrderBy.METADATA_PROFILE_VERSION_ASC = "+metadataProfileVersion";
KalturaMetadataOrderBy.METADATA_PROFILE_VERSION_DESC = "-metadataProfileVersion";
KalturaMetadataOrderBy.VERSION_ASC = "+version";
KalturaMetadataOrderBy.VERSION_DESC = "-version";
KalturaMetadataOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaMetadataOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaMetadataOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaMetadataOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaMetadataProfileOrderBy(){
}
KalturaMetadataProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaMetadataProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaMetadataProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaMetadataProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaMixEntryOrderBy(){
}
KalturaMixEntryOrderBy.PLAYS_ASC = "+plays";
KalturaMixEntryOrderBy.PLAYS_DESC = "-plays";
KalturaMixEntryOrderBy.VIEWS_ASC = "+views";
KalturaMixEntryOrderBy.VIEWS_DESC = "-views";
KalturaMixEntryOrderBy.DURATION_ASC = "+duration";
KalturaMixEntryOrderBy.DURATION_DESC = "-duration";
KalturaMixEntryOrderBy.MS_DURATION_ASC = "+msDuration";
KalturaMixEntryOrderBy.MS_DURATION_DESC = "-msDuration";
KalturaMixEntryOrderBy.NAME_ASC = "+name";
KalturaMixEntryOrderBy.NAME_DESC = "-name";
KalturaMixEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaMixEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaMixEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaMixEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaMixEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaMixEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaMixEntryOrderBy.RANK_ASC = "+rank";
KalturaMixEntryOrderBy.RANK_DESC = "-rank";
KalturaMixEntryOrderBy.TOTAL_RANK_ASC = "+totalRank";
KalturaMixEntryOrderBy.TOTAL_RANK_DESC = "-totalRank";
KalturaMixEntryOrderBy.START_DATE_ASC = "+startDate";
KalturaMixEntryOrderBy.START_DATE_DESC = "-startDate";
KalturaMixEntryOrderBy.END_DATE_ASC = "+endDate";
KalturaMixEntryOrderBy.END_DATE_DESC = "-endDate";
KalturaMixEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaMixEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaMixEntryOrderBy.RECENT_ASC = "+recent";
KalturaMixEntryOrderBy.RECENT_DESC = "-recent";
KalturaMixEntryOrderBy.WEIGHT_ASC = "+weight";
KalturaMixEntryOrderBy.WEIGHT_DESC = "-weight";

function KalturaNotificationOrderBy(){
}
KalturaNotificationOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaNotificationOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaNotificationOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaNotificationOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaNotificationOrderBy.PROCESSOR_EXPIRATION_ASC = "+processorExpiration";
KalturaNotificationOrderBy.PROCESSOR_EXPIRATION_DESC = "-processorExpiration";
KalturaNotificationOrderBy.EXECUTION_ATTEMPTS_ASC = "+executionAttempts";
KalturaNotificationOrderBy.EXECUTION_ATTEMPTS_DESC = "-executionAttempts";
KalturaNotificationOrderBy.LOCK_VERSION_ASC = "+lockVersion";
KalturaNotificationOrderBy.LOCK_VERSION_DESC = "-lockVersion";

function KalturaPartnerOrderBy(){
}
KalturaPartnerOrderBy.ID_ASC = "+id";
KalturaPartnerOrderBy.ID_DESC = "-id";
KalturaPartnerOrderBy.NAME_ASC = "+name";
KalturaPartnerOrderBy.NAME_DESC = "-name";
KalturaPartnerOrderBy.WEBSITE_ASC = "+website";
KalturaPartnerOrderBy.WEBSITE_DESC = "-website";
KalturaPartnerOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaPartnerOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaPartnerOrderBy.ADMIN_NAME_ASC = "+adminName";
KalturaPartnerOrderBy.ADMIN_NAME_DESC = "-adminName";
KalturaPartnerOrderBy.ADMIN_EMAIL_ASC = "+adminEmail";
KalturaPartnerOrderBy.ADMIN_EMAIL_DESC = "-adminEmail";
KalturaPartnerOrderBy.STATUS_ASC = "+status";
KalturaPartnerOrderBy.STATUS_DESC = "-status";

function KalturaPdfFlavorParamsOrderBy(){
}

function KalturaPdfFlavorParamsOutputOrderBy(){
}

function KalturaPermissionItemOrderBy(){
}
KalturaPermissionItemOrderBy.ID_ASC = "+id";
KalturaPermissionItemOrderBy.ID_DESC = "-id";
KalturaPermissionItemOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaPermissionItemOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaPermissionItemOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaPermissionItemOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaPermissionItemType(){
}
KalturaPermissionItemType.API_ACTION_ITEM = "kApiActionPermissionItem";
KalturaPermissionItemType.API_PARAMETER_ITEM = "kApiParameterPermissionItem";

function KalturaPermissionOrderBy(){
}
KalturaPermissionOrderBy.ID_ASC = "+id";
KalturaPermissionOrderBy.ID_DESC = "-id";
KalturaPermissionOrderBy.NAME_ASC = "+name";
KalturaPermissionOrderBy.NAME_DESC = "-name";
KalturaPermissionOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaPermissionOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaPermissionOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaPermissionOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaPlayableEntryOrderBy(){
}
KalturaPlayableEntryOrderBy.PLAYS_ASC = "+plays";
KalturaPlayableEntryOrderBy.PLAYS_DESC = "-plays";
KalturaPlayableEntryOrderBy.VIEWS_ASC = "+views";
KalturaPlayableEntryOrderBy.VIEWS_DESC = "-views";
KalturaPlayableEntryOrderBy.DURATION_ASC = "+duration";
KalturaPlayableEntryOrderBy.DURATION_DESC = "-duration";
KalturaPlayableEntryOrderBy.MS_DURATION_ASC = "+msDuration";
KalturaPlayableEntryOrderBy.MS_DURATION_DESC = "-msDuration";
KalturaPlayableEntryOrderBy.NAME_ASC = "+name";
KalturaPlayableEntryOrderBy.NAME_DESC = "-name";
KalturaPlayableEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaPlayableEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaPlayableEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaPlayableEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaPlayableEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaPlayableEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaPlayableEntryOrderBy.RANK_ASC = "+rank";
KalturaPlayableEntryOrderBy.RANK_DESC = "-rank";
KalturaPlayableEntryOrderBy.TOTAL_RANK_ASC = "+totalRank";
KalturaPlayableEntryOrderBy.TOTAL_RANK_DESC = "-totalRank";
KalturaPlayableEntryOrderBy.START_DATE_ASC = "+startDate";
KalturaPlayableEntryOrderBy.START_DATE_DESC = "-startDate";
KalturaPlayableEntryOrderBy.END_DATE_ASC = "+endDate";
KalturaPlayableEntryOrderBy.END_DATE_DESC = "-endDate";
KalturaPlayableEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaPlayableEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaPlayableEntryOrderBy.RECENT_ASC = "+recent";
KalturaPlayableEntryOrderBy.RECENT_DESC = "-recent";
KalturaPlayableEntryOrderBy.WEIGHT_ASC = "+weight";
KalturaPlayableEntryOrderBy.WEIGHT_DESC = "-weight";

function KalturaPlaylistOrderBy(){
}
KalturaPlaylistOrderBy.NAME_ASC = "+name";
KalturaPlaylistOrderBy.NAME_DESC = "-name";
KalturaPlaylistOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaPlaylistOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaPlaylistOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaPlaylistOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaPlaylistOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaPlaylistOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaPlaylistOrderBy.RANK_ASC = "+rank";
KalturaPlaylistOrderBy.RANK_DESC = "-rank";
KalturaPlaylistOrderBy.TOTAL_RANK_ASC = "+totalRank";
KalturaPlaylistOrderBy.TOTAL_RANK_DESC = "-totalRank";
KalturaPlaylistOrderBy.START_DATE_ASC = "+startDate";
KalturaPlaylistOrderBy.START_DATE_DESC = "-startDate";
KalturaPlaylistOrderBy.END_DATE_ASC = "+endDate";
KalturaPlaylistOrderBy.END_DATE_DESC = "-endDate";
KalturaPlaylistOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaPlaylistOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";
KalturaPlaylistOrderBy.RECENT_ASC = "+recent";
KalturaPlaylistOrderBy.RECENT_DESC = "-recent";
KalturaPlaylistOrderBy.WEIGHT_ASC = "+weight";
KalturaPlaylistOrderBy.WEIGHT_DESC = "-weight";

function KalturaRemoteDropFolderOrderBy(){
}
KalturaRemoteDropFolderOrderBy.ID_ASC = "+id";
KalturaRemoteDropFolderOrderBy.ID_DESC = "-id";
KalturaRemoteDropFolderOrderBy.NAME_ASC = "+name";
KalturaRemoteDropFolderOrderBy.NAME_DESC = "-name";
KalturaRemoteDropFolderOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaRemoteDropFolderOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaRemoteDropFolderOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaRemoteDropFolderOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaReportInterval(){
}
KalturaReportInterval.MONTHS = "months";
KalturaReportInterval.DAYS = "days";

function KalturaReportOrderBy(){
}
KalturaReportOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaReportOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaSchemaType(){
}
KalturaSchemaType.SYNDICATION = "syndication";
KalturaSchemaType.BULK_UPLOAD_XML = "bulkUploadXml.bulkUploadXML";
KalturaSchemaType.BULK_UPLOAD_RESULT_XML = "bulkUploadXml.bulkUploadResultXML";
KalturaSchemaType.DROP_FOLDER_XML = "dropFolderXmlBulkUpload.dropFolderXml";
KalturaSchemaType.SERVE_API = "cuePoint.serveAPI";
KalturaSchemaType.INGEST_API = "cuePoint.ingestAPI";

function KalturaScpDropFolderOrderBy(){
}
KalturaScpDropFolderOrderBy.ID_ASC = "+id";
KalturaScpDropFolderOrderBy.ID_DESC = "-id";
KalturaScpDropFolderOrderBy.NAME_ASC = "+name";
KalturaScpDropFolderOrderBy.NAME_DESC = "-name";
KalturaScpDropFolderOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaScpDropFolderOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaScpDropFolderOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaScpDropFolderOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaSearchConditionComparison(){
}
KalturaSearchConditionComparison.EQUAL = "1";
KalturaSearchConditionComparison.GREATER_THAN = "2";
KalturaSearchConditionComparison.GREATER_THAN_OR_EQUAL = "3";
KalturaSearchConditionComparison.LESS_THAN = "4";
KalturaSearchConditionComparison.LESS_THAN_OR_EQUAL = "5";
KalturaSearchConditionComparison.EQUEL = "1";
KalturaSearchConditionComparison.GREATER_THAN_OR_EQUEL = "3";
KalturaSearchConditionComparison.LESS_THAN_OR_EQUEL = "5";

function KalturaSftpDropFolderOrderBy(){
}
KalturaSftpDropFolderOrderBy.ID_ASC = "+id";
KalturaSftpDropFolderOrderBy.ID_DESC = "-id";
KalturaSftpDropFolderOrderBy.NAME_ASC = "+name";
KalturaSftpDropFolderOrderBy.NAME_DESC = "-name";
KalturaSftpDropFolderOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaSftpDropFolderOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaSftpDropFolderOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaSftpDropFolderOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaShortLinkOrderBy(){
}
KalturaShortLinkOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaShortLinkOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaShortLinkOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaShortLinkOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaShortLinkOrderBy.EXPIRES_AT_ASC = "+expiresAt";
KalturaShortLinkOrderBy.EXPIRES_AT_DESC = "-expiresAt";

function KalturaSourceType(){
}
KalturaSourceType.FILE = "1";
KalturaSourceType.WEBCAM = "2";
KalturaSourceType.URL = "5";
KalturaSourceType.SEARCH_PROVIDER = "6";
KalturaSourceType.AKAMAI_LIVE = "29";
KalturaSourceType.MANUAL_LIVE_STREAM = "30";
KalturaSourceType.LIMELIGHT_LIVE = "limeLight.LIVE_STREAM";

function KalturaSshDropFolderOrderBy(){
}
KalturaSshDropFolderOrderBy.ID_ASC = "+id";
KalturaSshDropFolderOrderBy.ID_DESC = "-id";
KalturaSshDropFolderOrderBy.NAME_ASC = "+name";
KalturaSshDropFolderOrderBy.NAME_DESC = "-name";
KalturaSshDropFolderOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaSshDropFolderOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaSshDropFolderOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaSshDropFolderOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaStorageProfileOrderBy(){
}
KalturaStorageProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaStorageProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaStorageProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaStorageProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaSwfFlavorParamsOrderBy(){
}

function KalturaSwfFlavorParamsOutputOrderBy(){
}

function KalturaSyndicationDistributionProfileOrderBy(){
}
KalturaSyndicationDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaSyndicationDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaSyndicationDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaSyndicationDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaSyndicationDistributionProviderOrderBy(){
}

function KalturaSyndicationFeedEntriesOrderBy(){
}
KalturaSyndicationFeedEntriesOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaSyndicationFeedEntriesOrderBy.RECENT = "recent";

function KalturaSystemPartnerLimitType(){
}
KalturaSystemPartnerLimitType.ENTRIES = "ENTRIES";
KalturaSystemPartnerLimitType.MONTHLY_STREAM_ENTRIES = "MONTHLY_STREAM_ENTRIES";
KalturaSystemPartnerLimitType.MONTHLY_BANDWIDTH = "MONTHLY_BANDWIDTH";
KalturaSystemPartnerLimitType.PUBLISHERS = "PUBLISHERS";
KalturaSystemPartnerLimitType.ADMIN_LOGIN_USERS = "ADMIN_LOGIN_USERS";
KalturaSystemPartnerLimitType.LOGIN_USERS = "LOGIN_USERS";
KalturaSystemPartnerLimitType.USER_LOGIN_ATTEMPTS = "USER_LOGIN_ATTEMPTS";
KalturaSystemPartnerLimitType.BULK_SIZE = "BULK_SIZE";
KalturaSystemPartnerLimitType.MONTHLY_STORAGE = "MONTHLY_STORAGE";
KalturaSystemPartnerLimitType.MONTHLY_STORAGE_AND_BANDWIDTH = "MONTHLY_STORAGE_AND_BANDWIDTH";
KalturaSystemPartnerLimitType.END_USERS = "END_USERS";
KalturaSystemPartnerLimitType.ACCESS_CONTROLS = "ACCESS_CONTROLS";

function KalturaTaggedObjectType(){
}
KalturaTaggedObjectType.ENTRY = "1";
KalturaTaggedObjectType.CATEGORY = "2";

function KalturaThumbAssetOrderBy(){
}
KalturaThumbAssetOrderBy.SIZE_ASC = "+size";
KalturaThumbAssetOrderBy.SIZE_DESC = "-size";
KalturaThumbAssetOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaThumbAssetOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaThumbAssetOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaThumbAssetOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaThumbAssetOrderBy.DELETED_AT_ASC = "+deletedAt";
KalturaThumbAssetOrderBy.DELETED_AT_DESC = "-deletedAt";

function KalturaThumbParamsOrderBy(){
}

function KalturaThumbParamsOutputOrderBy(){
}

function KalturaTubeMogulSyndicationFeedCategories(){
}
KalturaTubeMogulSyndicationFeedCategories.ARTS_AND_ANIMATION = "Arts &amp; Animation";
KalturaTubeMogulSyndicationFeedCategories.COMEDY = "Comedy";
KalturaTubeMogulSyndicationFeedCategories.ENTERTAINMENT = "Entertainment";
KalturaTubeMogulSyndicationFeedCategories.MUSIC = "Music";
KalturaTubeMogulSyndicationFeedCategories.NEWS_AND_BLOGS = "News &amp; Blogs";
KalturaTubeMogulSyndicationFeedCategories.SCIENCE_AND_TECHNOLOGY = "Science &amp; Technology";
KalturaTubeMogulSyndicationFeedCategories.SPORTS = "Sports";
KalturaTubeMogulSyndicationFeedCategories.TRAVEL_AND_PLACES = "Travel &amp; Places";
KalturaTubeMogulSyndicationFeedCategories.VIDEO_GAMES = "Video Games";
KalturaTubeMogulSyndicationFeedCategories.ANIMALS_AND_PETS = "Animals &amp; Pets";
KalturaTubeMogulSyndicationFeedCategories.AUTOS = "Autos";
KalturaTubeMogulSyndicationFeedCategories.VLOGS_PEOPLE = "Vlogs &amp; People";
KalturaTubeMogulSyndicationFeedCategories.HOW_TO_INSTRUCTIONAL_DIY = "How To/Instructional/DIY";
KalturaTubeMogulSyndicationFeedCategories.COMMERCIALS_PROMOTIONAL = "Commercials/Promotional";
KalturaTubeMogulSyndicationFeedCategories.FAMILY_AND_KIDS = "Family &amp; Kids";

function KalturaTubeMogulSyndicationFeedOrderBy(){
}
KalturaTubeMogulSyndicationFeedOrderBy.PLAYLIST_ID_ASC = "+playlistId";
KalturaTubeMogulSyndicationFeedOrderBy.PLAYLIST_ID_DESC = "-playlistId";
KalturaTubeMogulSyndicationFeedOrderBy.NAME_ASC = "+name";
KalturaTubeMogulSyndicationFeedOrderBy.NAME_DESC = "-name";
KalturaTubeMogulSyndicationFeedOrderBy.TYPE_ASC = "+type";
KalturaTubeMogulSyndicationFeedOrderBy.TYPE_DESC = "-type";
KalturaTubeMogulSyndicationFeedOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaTubeMogulSyndicationFeedOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaTubeMogulSyndicationFeedOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaTubeMogulSyndicationFeedOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaUiConfAdminOrderBy(){
}
KalturaUiConfAdminOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaUiConfAdminOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaUiConfAdminOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaUiConfAdminOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaUiConfOrderBy(){
}
KalturaUiConfOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaUiConfOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaUiConfOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaUiConfOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaUploadTokenOrderBy(){
}
KalturaUploadTokenOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaUploadTokenOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaUserLoginDataOrderBy(){
}

function KalturaUserOrderBy(){
}
KalturaUserOrderBy.ID_ASC = "+id";
KalturaUserOrderBy.ID_DESC = "-id";
KalturaUserOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaUserOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaUserRoleOrderBy(){
}
KalturaUserRoleOrderBy.ID_ASC = "+id";
KalturaUserRoleOrderBy.ID_DESC = "-id";
KalturaUserRoleOrderBy.NAME_ASC = "+name";
KalturaUserRoleOrderBy.NAME_DESC = "-name";
KalturaUserRoleOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaUserRoleOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaUserRoleOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaUserRoleOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaVideoCodec(){
}
KalturaVideoCodec.NONE = "";
KalturaVideoCodec.VP6 = "vp6";
KalturaVideoCodec.H263 = "h263";
KalturaVideoCodec.H264 = "h264";
KalturaVideoCodec.H264B = "h264b";
KalturaVideoCodec.H264M = "h264m";
KalturaVideoCodec.H264H = "h264h";
KalturaVideoCodec.FLV = "flv";
KalturaVideoCodec.MPEG4 = "mpeg4";
KalturaVideoCodec.THEORA = "theora";
KalturaVideoCodec.WMV2 = "wmv2";
KalturaVideoCodec.WMV3 = "wmv3";
KalturaVideoCodec.WVC1A = "wvc1a";
KalturaVideoCodec.VP8 = "vp8";
KalturaVideoCodec.MPEG2 = "mpeg2";
KalturaVideoCodec.COPY = "copy";

function KalturaVirusScanEngineType(){
}
KalturaVirusScanEngineType.SYMANTEC_SCAN_ENGINE = "symantecScanEngine.SymantecScanEngine";
KalturaVirusScanEngineType.SYMANTEC_SCAN_JAVA_ENGINE = "symantecScanEngine.SymantecScanJavaEngine";
KalturaVirusScanEngineType.SYMANTEC_SCAN_DIRECT_ENGINE = "symantecScanEngine.SymantecScanDirectEngine";
KalturaVirusScanEngineType.CLAMAV_SCAN_ENGINE = "clamAVScanEngine.ClamAV";

function KalturaVirusScanProfileOrderBy(){
}
KalturaVirusScanProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaVirusScanProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaVirusScanProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaVirusScanProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaWidgetOrderBy(){
}
KalturaWidgetOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaWidgetOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaYahooSyndicationFeedAdultValues(){
}
KalturaYahooSyndicationFeedAdultValues.ADULT = "adult";
KalturaYahooSyndicationFeedAdultValues.NON_ADULT = "nonadult";

function KalturaYahooSyndicationFeedCategories(){
}
KalturaYahooSyndicationFeedCategories.ACTION = "Action";
KalturaYahooSyndicationFeedCategories.ART_AND_ANIMATION = "Art &amp; Animation";
KalturaYahooSyndicationFeedCategories.ENTERTAINMENT_AND_TV = "Entertainment &amp; TV";
KalturaYahooSyndicationFeedCategories.FOOD = "Food";
KalturaYahooSyndicationFeedCategories.GAMES = "Games";
KalturaYahooSyndicationFeedCategories.HOW_TO = "How-To";
KalturaYahooSyndicationFeedCategories.MUSIC = "Music";
KalturaYahooSyndicationFeedCategories.PEOPLE_AND_VLOGS = "People &amp; Vlogs";
KalturaYahooSyndicationFeedCategories.SCIENCE_AND_ENVIRONMENT = "Science &amp; Environment";
KalturaYahooSyndicationFeedCategories.TRANSPORTATION = "Transportation";
KalturaYahooSyndicationFeedCategories.ANIMALS = "Animals";
KalturaYahooSyndicationFeedCategories.COMMERCIALS = "Commercials";
KalturaYahooSyndicationFeedCategories.FAMILY = "Family";
KalturaYahooSyndicationFeedCategories.FUNNY_VIDEOS = "Funny Videos";
KalturaYahooSyndicationFeedCategories.HEALTH_AND_BEAUTY = "Health &amp; Beauty";
KalturaYahooSyndicationFeedCategories.MOVIES_AND_SHORTS = "Movies &amp; Shorts";
KalturaYahooSyndicationFeedCategories.NEWS_AND_POLITICS = "News &amp; Politics";
KalturaYahooSyndicationFeedCategories.PRODUCTS_AND_TECH = "Products &amp; Tech.";
KalturaYahooSyndicationFeedCategories.SPORTS = "Sports";
KalturaYahooSyndicationFeedCategories.TRAVEL = "Travel";

function KalturaYahooSyndicationFeedOrderBy(){
}
KalturaYahooSyndicationFeedOrderBy.PLAYLIST_ID_ASC = "+playlistId";
KalturaYahooSyndicationFeedOrderBy.PLAYLIST_ID_DESC = "-playlistId";
KalturaYahooSyndicationFeedOrderBy.NAME_ASC = "+name";
KalturaYahooSyndicationFeedOrderBy.NAME_DESC = "-name";
KalturaYahooSyndicationFeedOrderBy.TYPE_ASC = "+type";
KalturaYahooSyndicationFeedOrderBy.TYPE_DESC = "-type";
KalturaYahooSyndicationFeedOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaYahooSyndicationFeedOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaYahooSyndicationFeedOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaYahooSyndicationFeedOrderBy.UPDATED_AT_DESC = "-updatedAt";
