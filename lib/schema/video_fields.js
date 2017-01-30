'use strict';

var video_fields = [
  {
    name: 'id',
    type: 'id',
    primary_key: true
  },
  {
    name: 'trainer_id',
    type: 'varchar',
    references: [ 'trainers', 'id']
  },
  {
    name: 'url',
    type: 'varchar'
  },
  {
    name: 'tags',
    type: 'varchar',
    array: true
  }
]
