package 7.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 7.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Контрагент
 */
@Entity(name = "IIS7Контрагент")
@Table(schema = "public", name = "Контрагент")
public class Kontragent {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодКонтрагента")
    private Integer кодконтрагента;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Договор")
    private String договор;

    @Column(name = "Организация")
    private String организация;


    public Kontragent() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодКонтрагента() {
      return кодконтрагента;
    }

    public void setКодКонтрагента(Integer кодконтрагента) {
      this.кодконтрагента = кодконтрагента;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public String getДоговор() {
      return договор;
    }

    public void setДоговор(String договор) {
      this.договор = договор;
    }

    public String getОрганизация() {
      return организация;
    }

    public void setОрганизация(String организация) {
      this.организация = организация;
    }


}