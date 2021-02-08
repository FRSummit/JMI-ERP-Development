<template>
  <div id="sales-center" class="sales-center">
    <Heading :pathName="pathName" :routeName="routeName" />
    <PaginationSection
      :pagingStart="pageDataStart"
      :pagingEnd="pageDataEnd"
      :totalPage="totalPagesData"
      :routeName="routeName"
      v-on:print="onPrintClick"
      v-on:excel="onExcelClick"
    />

    <!-- Dragable data table row -->
    <v-data-table
      :headers="tableHeaders"
      :items="tableItems"
      :loading="loading"
      item-key="id"
      :show-select="false"
      :disable-pagination="true"
      :hide-default-footer="true"
      class="page__table"
    >
      <template v-slot:body="props">
        <draggable
          :list="props.items"
          tag="tbody"
        >
          <tr
            v-for="(user, index) in users"
            :key="index"
          >
            <td>
              <v-icon
                small
                class="page__grab-icon"
              >
                mdi-arrow-all
              </v-icon>
            </td>
            <td> {{ index + 1 }} </td>
            <td> {{ user.name }} </td>
            <td> {{ user.short_code }} </td>
            <td> {{ user.admin }} </td>
            <td> {{ user.key_contact }} </td>
            <td> {{ user.phone }} </td>
            <td>
              <v-icon
                small
                @click="editUser(user.id)"
              >
                mdi-pencil
              </v-icon>
            </td>
          </tr>
        </draggable>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
import PaginationSection from "../../../../components/private_view_components/ADM/SBU/PaginationSidebarSection";
import ERPSidebarService from "../../../../service/ERPSidebarService";
const service = new ERPSidebarService();
import Draggable from 'vuedraggable';

export default {
  components: {
    Heading,
    PaginationSection,
    Draggable
  },
  data() {
    return {
      routeName: "Sales Center",
      parentPath: "Settings & Management",
      currentRoute: this.$route.name,
      pathName: null,
      pageDataStart: 1,
      pageDataEnd: 12,
      totalPagesData: 1003,
      users: []
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
    service.getSBUSisterConcernData().then((res) => {
      this.users = res.data;
    });
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [{ name: "Settings & Management" }, { name: "Sales Center" }];
    },
    // sisterConcernClick(id) {
    //   console.log(id);
    //   console.log(this.sub_data[id]);
    //   this.pathName += " > Sister Concern";
    //   this.$router.replace(
    //     "/adm/sbu/sbu-sister-concern:" + id
    //   );
    // },
    onPrintClick() {
      // this.$htmlToPaper("cont", env.printOption, () => {
      //   console.warn("done");
      // });
      //   customJs.test(this.sub_data)
    },
    onExcelClick() {
      //   console.log(this.sub_data)
      // let rows = [];
      // let columnHeader = ['NAME', 'ID NUMBER', 'SISTER CONCERN', 'ACTIVE USER', 'STATUS'];
      // let pdfName = 'Schedule';
      // this.sub_data.forEach(element => {
      //     var temp = [
      //         element.name || '',
      //         element.id_number || '',
      //         element.sister_concern || '',
      //         element.active_user || '',
      //         element.status || '',
      //     ];
      //     rows.push(temp);
      // });
      // var doc = new jsPDF('p', 'pt');
      // doc.autoTable(columnHeader, rows);
      // doc.save(pdfName + '.pdf');
    },
  },
};
</script>

<style scoped>
</style>