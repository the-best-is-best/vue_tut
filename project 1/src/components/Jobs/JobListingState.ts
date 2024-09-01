// JobListingState.ts
import JobModel from '@/models/JobModel'; // Adjust the path as needed
import { reactive } from 'vue';

export default class JobListingState {
  state: {
    job: JobModel;
    showFullDescription: boolean;
  };

  constructor(job: JobModel) {
    // Initialize the reactive state
    this.state = reactive({
      job,
      showFullDescription: false
    });
  }

  toggleDescription() {
    this.state.showFullDescription = !this.state.showFullDescription;
  }

  // Define a computed property
  get truncatedDescription() {
    let description = this.state.job.description;
    if (!this.state.showFullDescription) {
      description = description.substring(0, 90) + '...';
    }
    return description;
  }
}
