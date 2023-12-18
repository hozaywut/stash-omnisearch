const query = `
query FindMatches($performer_filter: FindFilterType, $tag_filter: FindFilterType, $scene_filter: FindFilterType, $studio_filter: FindFilterType) {
  findStudios(filter: $studio_filter){
    count
    studios {
      id
      name
      image_path
    }
  }
  findPerformers(filter: $performer_filter) {
    count
    performers {
      id
      name
      details
      disambiguation
      alias_list
      image_path
    }
  }
  findTags(filter: $tag_filter) {
    count
    tags {
      id
      name
      aliases
      image_path
    }
  }
  findScenes(filter: $scene_filter) {
    count
    scenes {
      id
      title
      files {
        id
      }
      paths {
        screenshot
      }
      details
    }
  }
}
`;

export default query;
