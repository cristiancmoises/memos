// @generated by protoc-gen-es v1.3.0
// @generated from file store/user_setting.proto (package memos.store, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum memos.store.UserSettingKey
 */
export declare enum UserSettingKey {
  /**
   * @generated from enum value: USER_SETTING_KEY_UNSPECIFIED = 0;
   */
  USER_SETTING_KEY_UNSPECIFIED = 0,

  /**
   * Access tokens for the user.
   *
   * @generated from enum value: USER_SETTING_ACCESS_TOKENS = 1;
   */
  USER_SETTING_ACCESS_TOKENS = 1,
}

/**
 * @generated from message memos.store.UserSetting
 */
export declare class UserSetting extends Message<UserSetting> {
  /**
   * @generated from field: int32 user_id = 1;
   */
  userId: number;

  /**
   * @generated from field: memos.store.UserSettingKey key = 2;
   */
  key: UserSettingKey;

  /**
   * @generated from oneof memos.store.UserSetting.value
   */
  value: {
    /**
     * @generated from field: memos.store.AccessTokensUserSetting access_tokens = 3;
     */
    value: AccessTokensUserSetting;
    case: "accessTokens";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<UserSetting>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "memos.store.UserSetting";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserSetting;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserSetting;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserSetting;

  static equals(a: UserSetting | PlainMessage<UserSetting> | undefined, b: UserSetting | PlainMessage<UserSetting> | undefined): boolean;
}

/**
 * @generated from message memos.store.AccessTokensUserSetting
 */
export declare class AccessTokensUserSetting extends Message<AccessTokensUserSetting> {
  /**
   * @generated from field: repeated memos.store.AccessTokensUserSetting.AccessToken access_tokens = 1;
   */
  accessTokens: AccessTokensUserSetting_AccessToken[];

  constructor(data?: PartialMessage<AccessTokensUserSetting>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "memos.store.AccessTokensUserSetting";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccessTokensUserSetting;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccessTokensUserSetting;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccessTokensUserSetting;

  static equals(a: AccessTokensUserSetting | PlainMessage<AccessTokensUserSetting> | undefined, b: AccessTokensUserSetting | PlainMessage<AccessTokensUserSetting> | undefined): boolean;
}

/**
 * @generated from message memos.store.AccessTokensUserSetting.AccessToken
 */
export declare class AccessTokensUserSetting_AccessToken extends Message<AccessTokensUserSetting_AccessToken> {
  /**
   * The access token is a JWT token.
   * Including expiration time, issuer, etc.
   *
   * @generated from field: string access_token = 1;
   */
  accessToken: string;

  /**
   * A description for the access token.
   *
   * @generated from field: string description = 2;
   */
  description: string;

  constructor(data?: PartialMessage<AccessTokensUserSetting_AccessToken>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "memos.store.AccessTokensUserSetting.AccessToken";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccessTokensUserSetting_AccessToken;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccessTokensUserSetting_AccessToken;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccessTokensUserSetting_AccessToken;

  static equals(a: AccessTokensUserSetting_AccessToken | PlainMessage<AccessTokensUserSetting_AccessToken> | undefined, b: AccessTokensUserSetting_AccessToken | PlainMessage<AccessTokensUserSetting_AccessToken> | undefined): boolean;
}

