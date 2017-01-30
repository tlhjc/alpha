'use strict';

var trainer_fields = [
  {
    name: 'id',
    type: 'id',
    primary_key: true
  },
  {
    name: 'first_name',
    type: 'varchar'
  },
  {
    name: 'last_name',
    type: 'varchar'
  },
  {
    name: 'followers',
    type: 'varchar'
  },
  {
    name: 'instagram_handle',
    type: 'varchar',
    unique: true
  },
  {
    name: 'profile_image',
    type: 'varchar'
  },
  {
    name: 'instagram_id',
    type: 'varchar',
    unique: true
  }
];
